<template>
  <section class="py-12 bg-green-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl md:text-5xl font-extrabold text-green-800 dark:text-green-300 mb-10 flex items-center gap-4">
        <i class="fas fa-gamepad text-green-700 dark:text-green-400 text-3xl md:text-4xl"></i>
        Irish Games Database
      </h2>
      
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <p class="text-green-800 dark:text-white text-lg">Loading games...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
        <p class="text-red-800 dark:text-red-300 font-semibold mb-2">Error loading games</p>
        <p class="text-red-600 dark:text-red-400 text-sm">{{ error }}</p>
        <button 
          @click="() => fetchGames(false)" 
          class="mt-4 px-4 py-2 bg-green-700 dark:bg-green-600 text-white rounded hover:bg-green-600 dark:hover:bg-green-500 transition-colors">
          Retry
        </button>
      </div>

      <!-- Search and Sort Controls -->
      <div v-else-if="allGames.length > 0" class="mb-6 space-y-4">
        <div class="flex flex-col sm:flex-row gap-4">
          <!-- Search Input -->
          <div class="flex-1">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search games..."
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-green-300 dark:focus:border-green-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          
          <!-- Sort Dropdown -->
          <div class="sm:w-64">
            <select
              v-model="sortBy"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-green-300 dark:focus:border-green-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            >
              <option value="date-desc">Release Date (Newest)</option>
              <option value="date-asc">Release Date (Oldest)</option>
              <option value="score-desc">Review Score (High to Low)</option>
              <option value="score-asc">Review Score (Low to High)</option>
              <option value="review-desc">Review Description (A-Z)</option>
              <option value="review-asc">Review Description (Z-A)</option>
            </select>
          </div>
        </div>
        
        <!-- Results Count -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-600 dark:text-white">
          <span>Showing {{ paginatedGames.length }} of {{ filteredGames.length }} games</span>
          <button
            class="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-green-200 dark:border-green-700 text-green-800 dark:text-green-300 hover:bg-green-600 dark:hover:bg-green-700 hover:text-white transition"
            @click="refreshGames"
          >
            <i class="fas fa-arrows-rotate"></i>
            Refresh from source
          </button>
        </div>
      </div>

      <!-- Games Grid -->
      <div v-if="!loading && !error && paginatedGames.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div v-for="(game, index) in paginatedGames" :key="game.appId || `csv-${game.name}-${index}`" class="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900 transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-800 dark:text-green-300 mb-3">
              <a 
                :href="getGameLink(game)" 
                target="_blank" 
                rel="noopener noreferrer"
                class="hover:text-green-600 dark:hover:text-green-200 transition-colors">
                {{ game.name || 'Unknown Game' }}
              </a>
            </h3>
            
            <div v-if="game.developers" class="mb-3">
              <span class="text-base text-gray-700 dark:text-white">Developer: </span>
              <span class="text-base font-semibold text-green-700 dark:text-green-300">{{ formatDevelopers(game.developers) }}</span>
            </div>
            
            <div v-if="game.publisher" class="mb-3">
              <span class="text-base text-gray-700 dark:text-white">Publisher: </span>
              <span class="text-base font-semibold text-green-700 dark:text-green-300">{{ game.publisher }}</span>
            </div>
            
            <div v-if="game.platforms" class="mb-3">
              <span class="text-base text-gray-700 dark:text-white">Platforms: </span>
              <span class="text-base text-gray-600 dark:text-white">{{ game.platforms }}</span>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-if="game.isFree" 
                    class="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-sm rounded font-medium">
                Free
              </span>
            </div>

            <div class="space-y-2 mb-4">
              <div v-if="game.reviewScoreDesc" class="flex items-center gap-2">
                <span class="text-base text-gray-700 dark:text-white">Reviews:</span>
                <span :class="getReviewScoreColorClass(game.reviewScoreDesc)" 
                      class="text-sm font-semibold px-2 py-1 rounded">
                  {{ game.reviewScoreDesc }}
                </span>
              </div>
              
              <div v-if="game.metacritic !== null && game.metacritic !== undefined" class="flex items-center gap-2">
                <span class="text-base text-gray-700 dark:text-white">Metacritic:</span>
                <span class="text-base font-semibold text-green-700 dark:text-green-300">{{ game.metacritic }}</span>
              </div>
              
              <div v-if="game.releaseDate" class="flex items-center gap-2">
                <span class="text-base text-gray-700 dark:text-white">Released:</span>
                <span class="text-base text-gray-600 dark:text-white">{{ formatDate(game.releaseDate) }}</span>
              </div>
              
              <div v-if="game.website && game.website.trim()" class="flex items-center gap-2 flex-wrap">
                <span class="text-base text-gray-700 dark:text-white">Website:</span>
                <a 
                  :href="game.website.startsWith('http') ? game.website : `https://${game.website}`" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-base text-green-700 dark:text-green-300 hover:text-green-600 dark:hover:text-green-200 underline break-all">
                  {{ formatWebsite(game.website) }}
                </a>
              </div>
            </div>

            <div class="flex justify-end items-center pt-4 border-t border-gray-200 dark:border-gray-700">
              <a 
                v-if="game.appId" 
                :href="`https://store.steampowered.com/app/${game.appId}`" 
                target="_blank" 
                class="text-green-700 dark:text-green-300 hover:text-green-600 dark:hover:text-green-200 text-base font-semibold">
                View on Steam →
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="!loading && !error && filteredGames.length > 0" class="flex justify-center items-center gap-2 mt-8">
        <button
          @click="currentPage = 1"
          :disabled="currentPage === 1"
          :class="[
            'px-4 py-2 rounded-lg transition-colors',
            currentPage === 1 
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
              : 'bg-green-700 dark:bg-green-600 text-white hover:bg-green-600 dark:hover:bg-green-500'
          ]"
        >
          First
        </button>
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          :class="[
            'px-4 py-2 rounded-lg transition-colors',
            currentPage === 1 
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
              : 'bg-green-700 dark:bg-green-600 text-white hover:bg-green-600 dark:hover:bg-green-500'
          ]"
        >
          Previous
        </button>
        <span class="px-4 py-2 text-green-800 dark:text-green-300 font-medium">
          Page {{ currentPage }} of {{ totalPages }}
        </span>
        <button
          @click="currentPage++"
          :disabled="currentPage === totalPages"
          :class="[
            'px-4 py-2 rounded-lg transition-colors',
            currentPage === totalPages 
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
              : 'bg-purple-900 dark:bg-purple-700 text-white hover:bg-purple-700 dark:hover:bg-purple-600'
          ]"
        >
          Next
        </button>
        <button
          @click="currentPage = totalPages"
          :disabled="currentPage === totalPages"
          :class="[
            'px-4 py-2 rounded-lg transition-colors',
            currentPage === totalPages 
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
              : 'bg-purple-900 dark:bg-purple-700 text-white hover:bg-purple-700 dark:hover:bg-purple-600'
          ]"
        >
          Last
        </button>
      </div>

      <!-- Empty State -->
      <div v-if="!loading && !error && filteredGames.length === 0" class="text-center py-12">
        <p class="text-green-800 dark:text-white text-lg">No games found{{ searchQuery ? ' matching your search.' : '.' }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { queryIrishGames } from '../services/cubejs';
import { loadCSVGames } from '../services/csvLoader';

const allGames = ref([]);
const loading = ref(true);
const error = ref(null);
const searchQuery = ref('');
const sortBy = ref('date-desc');
const currentPage = ref(1);
const itemsPerPage = 24;

const formatDate = (dateString) => {
  if (!dateString) return 'Unknown';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch (e) {
    return dateString;
  }
};

const formatWebsite = (url) => {
  if (!url || !url.trim()) return '';
  try {
    // Handle URLs with or without protocol
    let urlToParse = url.trim();
    if (!urlToParse.startsWith('http://') && !urlToParse.startsWith('https://')) {
      urlToParse = `https://${urlToParse}`;
    }
    const urlObj = new URL(urlToParse);
    return urlObj.hostname.replace('www.', '');
  } catch (e) {
    // If URL parsing fails, return the original string (cleaned up)
    return url.trim().replace(/^https?:\/\//, '').replace(/^www\./, '');
  }
};

const formatDevelopers = (developers) => {
  if (!developers) return '';
  
  // If it's already a string, clean it up
  if (typeof developers === 'string') {
    return developers
      .replace(/[\[\]"]/g, '') // Remove brackets and quotes
      .trim();
  }
  
  // If it's an array, join it
  if (Array.isArray(developers)) {
    return developers
      .map(dev => typeof dev === 'string' ? dev.replace(/[\[\]"]/g, '').trim() : String(dev))
      .filter(dev => dev) // Remove empty strings
      .join(', ');
  }
  
  // For any other type, convert to string and clean
  return String(developers)
    .replace(/[\[\]"]/g, '')
    .trim();
};

const getGameLink = (game) => {
  // If website exists and is not empty, use it
  if (game.website && game.website.trim()) {
    const website = game.website.trim();
    // Ensure it has a protocol
    if (website.startsWith('http://') || website.startsWith('https://')) {
      return website;
    }
    return `https://${website}`;
  }
  // Otherwise, link to Steam
  if (game.appId) {
    return `https://store.steampowered.com/app/${game.appId}`;
  }
  // Fallback (shouldn't happen)
  return '#';
};

const getReviewScoreColorClass = (reviewDesc) => {
  if (!reviewDesc) return 'text-gray-600 dark:text-white bg-gray-100 dark:bg-gray-700';
  
  const desc = reviewDesc.toLowerCase();
  
  // Positive reviews - green shades
  if (desc.includes('overwhelmingly positive')) {
    return 'text-white bg-green-600 dark:bg-green-700';
  } else if (desc.includes('very positive')) {
    return 'text-white bg-green-500 dark:bg-green-600';
  } else if (desc.includes('positive') && !desc.includes('mostly')) {
    return 'text-white bg-green-400 dark:bg-green-500';
  } else if (desc.includes('mostly positive')) {
    return 'text-green-800 dark:text-white bg-green-100 dark:bg-green-900/50';
  }
  // Mixed/Neutral - yellow/orange
  else if (desc.includes('mixed')) {
    return 'text-yellow-800 dark:text-white bg-yellow-100 dark:bg-yellow-900/50';
  }
  // Negative reviews - red shades
  else if (desc.includes('overwhelmingly negative')) {
    return 'text-white bg-red-700 dark:bg-red-800';
  } else if (desc.includes('very negative')) {
    return 'text-white bg-red-600 dark:bg-red-700';
  } else if (desc.includes('negative') && !desc.includes('mostly')) {
    return 'text-white bg-red-500 dark:bg-red-600';
  } else if (desc.includes('mostly negative')) {
    return 'text-red-800 dark:text-white bg-red-100 dark:bg-red-900/50';
  }
  // Default fallback
  else {
    return 'text-gray-700 dark:text-white bg-gray-200 dark:bg-gray-700';
  }
};

// Filter games based on search query
const filteredGames = computed(() => {
  let games = [...allGames.value];
  
  // Apply search filter
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim();
    games = games.filter(game => {
      const toStringValue = (value) => (value === null || value === undefined ? '' : String(value));
      const name = toStringValue(game.name).toLowerCase();
      const developers = formatDevelopers(game.developers).toLowerCase();
      const publisher = toStringValue(game.publisher).toLowerCase();
      const platforms = toStringValue(game.platforms).toLowerCase();
      const type = toStringValue(game.type).toLowerCase();
      const reviewDesc = toStringValue(game.reviewScoreDesc).toLowerCase();
      return name.includes(query) || developers.includes(query) || publisher.includes(query) || platforms.includes(query) || type.includes(query) || reviewDesc.includes(query);
    });
  }
  
  // Apply sorting
  games.sort((a, b) => {
    switch (sortBy.value) {
      case 'date-desc':
        return new Date(b.releaseDate || 0) - new Date(a.releaseDate || 0);
      case 'date-asc':
        return new Date(a.releaseDate || 0) - new Date(b.releaseDate || 0);
      case 'score-desc':
        return (b.reviewScore || 0) - (a.reviewScore || 0);
      case 'score-asc':
        return (a.reviewScore || 0) - (b.reviewScore || 0);
      case 'review-desc':
        return (a.reviewScoreDesc || '').localeCompare(b.reviewScoreDesc || '');
      case 'review-asc':
        return (b.reviewScoreDesc || '').localeCompare(a.reviewScoreDesc || '');
      default:
        return 0;
    }
  });
  
  return games;
});

// Pagination computed properties
const totalPages = computed(() => {
  return Math.ceil(filteredGames.value.length / itemsPerPage);
});

const paginatedGames = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredGames.value.slice(start, end);
});

// Reset to page 1 when search or sort changes
watch([searchQuery, sortBy], () => {
  currentPage.value = 1;
});

const fetchGames = async (useCache = true) => {
  console.log('fetchGames called, useCache:', useCache);
  loading.value = true;
  error.value = null;
  console.log('Loading state set to true');
  
  try {
    console.log('Starting to fetch games from both sources, useCache:', useCache);
    
    // Load both sources in parallel
    const [cubeGames, csvGames] = await Promise.all([
      queryIrishGames(useCache).catch(err => {
        console.warn('Failed to load Cube.js games:', err);
        return [];
      }),
      loadCSVGames().catch(err => {
        console.warn('Failed to load CSV games:', err);
        return [];
      })
    ]);
    
    console.log('Cube.js games:', cubeGames.length);
    console.log('CSV games:', csvGames.length);
    
    // Merge games, preferring Cube.js data when duplicates exist
    const mergedGames = mergeGameData(cubeGames, csvGames);
    
    console.log('Merged total:', mergedGames.length, 'games');
    console.log('Sample game data:', mergedGames[0]);
    
    // Ensure data is an array
    if (Array.isArray(mergedGames)) {
      allGames.value = mergedGames;
      console.log('allGames.value set to', mergedGames.length, 'games');
    } else {
      console.error('Merged data is not an array:', mergedGames);
      allGames.value = [];
    }
  } catch (err) {
    console.error('Error in fetchGames:', err);
    error.value = err.message || 'Failed to load games';
    allGames.value = [];
  } finally {
    console.log('Setting loading to false');
    loading.value = false;
    console.log('Current state - loading:', loading.value, 'games count:', allGames.value.length, 'error:', error.value);
  }
};

/**
 * Merge Cube.js and CSV game data, preferring Cube.js when duplicates exist
 * Duplicates are identified by matching game names (case-insensitive)
 */
const mergeGameData = (cubeGames, csvGames) => {
  const merged = [...cubeGames]
  const cubeGameNames = new Set(
    cubeGames.map(g => g.name?.toLowerCase().trim()).filter(Boolean)
  )
  
  // Add CSV games that don't exist in Cube.js data
  for (const csvGame of csvGames) {
    const csvName = csvGame.name?.toLowerCase().trim()
    if (csvName && !cubeGameNames.has(csvName)) {
      merged.push(csvGame)
    }
  }
  
  return merged
};

onMounted(() => {
  fetchGames();
});

const refreshGames = () => {
  fetchGames(false);
};
</script> 