import cubejs from '@cubejs-client/core';

// Cache configuration
const CACHE_KEY = 'cairde_irish_games_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Validate environment variables
const apiUrl = import.meta.env.VITE_CUBEJS_API_URL;
const authToken = import.meta.env.VITE_CUBEJS_AUTH_TOKEN;

if (!apiUrl || !authToken) {
  console.warn('Cube.js environment variables are not set. Please configure VITE_CUBEJS_API_URL and VITE_CUBEJS_AUTH_TOKEN in your .env file');
}

// Initialize Cube.js client
const cubejsApi = cubejs(
  authToken,
  {
    apiUrl: apiUrl
  }
);

/**
 * Get cached games data if available and not expired
 * @returns {Array|null} Cached games array or null if cache is invalid/expired
 */
function getCachedGames() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) {
      console.log('No cache found');
      return null;
    }

    const parsed = JSON.parse(cached);
    const { data, timestamp } = parsed;
    const now = Date.now();

    console.log('Cache found, timestamp:', new Date(timestamp), 'age:', (now - timestamp) / 1000, 'seconds');

    // Check if cache is still valid
    if (now - timestamp < CACHE_DURATION) {
      console.log('Loading games from cache, count:', data ? data.length : 0);
      if (Array.isArray(data)) {
        return data;
      } else {
        console.error('Cached data is not an array:', data);
        return null;
      }
    } else {
      // Cache expired, remove it
      console.log('Cache expired, removing');
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
  } catch (error) {
    console.error('Error reading cache:', error);
    localStorage.removeItem(CACHE_KEY);
    return null;
  }
}

/**
 * Save games data to cache
 * @param {Array} games - Games array to cache
 */
function setCachedGames(games) {
  try {
    const cacheData = {
      data: games,
      timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    console.log('Games data cached successfully');
  } catch (error) {
    console.error('Error saving to cache:', error);
  }
}

/**
 * Create a promise that rejects after a timeout
 */
function timeoutPromise(ms, promise) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(`Request timeout after ${ms}ms`));
    }, ms);
    
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  });
}

/**
 * Query games from Ireland using Cube.js
 * @param {boolean} useCache - Whether to use cached data if available (default: true)
 * @returns {Promise<Array>} Array of game objects
 */
export async function queryIrishGames(useCache = true) {
  // Try to get from cache first
  if (useCache) {
    const cached = getCachedGames();
    if (cached && Array.isArray(cached) && cached.length > 0) {
      console.log('Using cached games data, returning', cached.length, 'games');
      // Return immediately as a resolved promise
      return Promise.resolve(cached);
    } else if (cached) {
      console.warn('Cache returned non-array or empty:', cached);
    } else {
      console.log('No valid cache found, will fetch from API');
    }
  }

  if (!apiUrl || !authToken) {
    throw new Error('Cube.js API URL and Auth Token must be configured in environment variables');
  }

  console.log('Fetching games from Cube.js API:', apiUrl);
  
  const query = {
    dimensions: [
      "Games.appId",
      "Games.name",
      "Games.type",
      "Games.developers",
      "Games.reviewScore",
      "Games.reviewScoreDesc",
      "Games.isFree",
      "Games.releaseDate",
      "Games.metacritic",
      "Games.website"
    ],
    filters: [
      {
        member: "GamesFromIreland.appId",
        operator: "set"
      }
    ]
  };

  console.log('Query:', JSON.stringify(query, null, 2));

  try {
    // Add a 30 second timeout
    const resultSet = await timeoutPromise(30000, cubejsApi.load(query));
    
    console.log('Received result set from Cube.js');
    
    // Transform Cube.js result set to array of game objects
    // Try tablePivot first, fallback to raw data if needed
    let rows;
    if (resultSet && typeof resultSet.tablePivot === 'function') {
      rows = resultSet.tablePivot();
      console.log('Using tablePivot(), found', rows.length, 'rows');
    } else if (resultSet && typeof resultSet.rawData === 'function') {
      rows = resultSet.rawData();
      console.log('Using rawData(), found', rows.length, 'rows');
    } else if (Array.isArray(resultSet)) {
      rows = resultSet;
      console.log('Result is array, found', rows.length, 'rows');
    } else if (resultSet && resultSet.data) {
      rows = resultSet.data;
      console.log('Using resultSet.data, found', rows.length, 'rows');
    } else {
      console.warn('Unexpected resultSet structure:', resultSet);
      rows = [resultSet];
    }

    if (!rows || rows.length === 0) {
      console.warn('No rows found in result set');
      return [];
    }

    const games = rows.map(row => {
      // Handle both object key formats (with and without "Games." prefix)
      const getValue = (key) => {
        return row[key] !== undefined ? row[key] : row[`Games.${key}`];
      };

      return {
        appId: getValue("appId") || row["Games.appId"],
        name: getValue("name") || row["Games.name"],
        type: getValue("type") || row["Games.type"],
        developers: getValue("developers") || row["Games.developers"],
        reviewScore: getValue("reviewScore") !== undefined ? getValue("reviewScore") : row["Games.reviewScore"],
        reviewScoreDesc: getValue("reviewScoreDesc") || row["Games.reviewScoreDesc"],
        isFree: getValue("isFree") !== undefined ? getValue("isFree") : row["Games.isFree"],
        releaseDate: getValue("releaseDate") || row["Games.releaseDate"],
        metacritic: getValue("metacritic") !== undefined ? getValue("metacritic") : row["Games.metacritic"],
        website: getValue("website") || row["Games.website"]
      };
    });

    console.log('Processed', games.length, 'games');
    
    // Cache the results
    setCachedGames(games);
    
    console.log('About to return', games.length, 'games from queryIrishGames');

    return games;
  } catch (error) {
    console.error('Error querying Cube.js:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      apiUrl: apiUrl,
      hasAuthToken: !!authToken
    });
    
    // Provide more helpful error messages
    if (error.message) {
      if (error.message.includes('timeout')) {
        throw new Error(`Cube.js query timed out after 30 seconds. Please check your API URL and network connection.`);
      }
      throw new Error(`Cube.js query failed: ${error.message}`);
    }
    throw error;
  }
}

export default cubejsApi;

