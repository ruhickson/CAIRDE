/**
 * Load and parse CSV data from vgdwiki.csv
 * @returns {Promise<Array>} Array of game objects normalized to match Cube.js format
 */
export async function loadCSVGames() {
  try {
    // Fetch the CSV file from the public/data directory
    const response = await fetch('/data/vgdwiki.csv')
    if (!response.ok) {
      console.warn('Could not load CSV file:', response.statusText)
      return []
    }

    const csvText = await response.text()
    const lines = csvText.split('\n').filter(line => line.trim())
    
    if (lines.length < 2) {
      console.warn('CSV file appears to be empty or has no data rows')
      return []
    }

    // Parse header
    const headers = lines[0].split(',').map(h => h.trim())
    const titleIndex = headers.indexOf('Title')
    const developerIndex = headers.indexOf('Developer')
    const publisherIndex = headers.indexOf('Publisher')
    const platformsIndex = headers.indexOf('Platforms')
    const releaseDateIndex = headers.indexOf('Original Release Date')

    if (titleIndex === -1 || developerIndex === -1) {
      console.error('CSV missing required columns: Title or Developer')
      return []
    }

    // Parse data rows
    const games = []
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (!line) continue

      // Handle CSV parsing with quoted fields that may contain commas
      const values = parseCSVLine(line)
      
      if (values.length <= titleIndex || values.length <= developerIndex) {
        continue // Skip malformed rows
      }

      const title = values[titleIndex]?.trim()
      const developer = values[developerIndex]?.trim()
      
      if (!title || !developer) {
        continue // Skip rows without required fields
      }

      const publisher = publisherIndex >= 0 && values[publisherIndex] ? values[publisherIndex].trim() : null
      const platforms = platformsIndex >= 0 && values[platformsIndex] ? values[platformsIndex].trim() : null
      const releaseDateRaw = releaseDateIndex >= 0 && values[releaseDateIndex] ? values[releaseDateIndex].trim() : null

      // Parse release date - handle various formats
      let releaseDate = null
      if (releaseDateRaw) {
        // Remove quotes if present
        const dateStr = releaseDateRaw.replace(/^"|"$/g, '')
        // Try to parse the date
        const parsed = parseDate(dateStr)
        if (parsed) {
          releaseDate = parsed.toISOString()
        }
      }

      // Normalize to match Cube.js game object structure
      games.push({
        name: title,
        developers: developer,
        publisher: publisher,
        platforms: platforms,
        releaseDate: releaseDate,
        source: 'csv', // Mark as coming from CSV
        // These fields won't exist in CSV data
        appId: null,
        type: 'game',
        reviewScore: null,
        reviewScoreDesc: null,
        isFree: null,
        metacritic: null,
        website: null
      })
    }

    console.log('Loaded', games.length, 'games from CSV')
    return games
  } catch (error) {
    console.error('Error loading CSV games:', error)
    return []
  }
}

/**
 * Parse a CSV line handling quoted fields that may contain commas
 */
function parseCSVLine(line) {
  const values = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }
  
  // Add the last value
  values.push(current.trim())
  
  return values
}

/**
 * Parse various date formats into a Date object
 */
function parseDate(dateStr) {
  if (!dateStr || dateStr.toLowerCase() === 'tba' || dateStr.toLowerCase().includes('abandoned')) {
    return null
  }

  // Try standard date parsing
  const date = new Date(dateStr)
  if (!isNaN(date.getTime())) {
    return date
  }

  // Try parsing formats like "September 17, 2010"
  const months = {
    'january': 0, 'february': 1, 'march': 2, 'april': 3, 'may': 4, 'june': 5,
    'july': 6, 'august': 7, 'september': 8, 'october': 9, 'november': 10, 'december': 11
  }

  const parts = dateStr.toLowerCase().match(/(\w+)\s+(\d+),?\s+(\d{4})/)
  if (parts) {
    const month = months[parts[1]]
    const day = parseInt(parts[2])
    const year = parseInt(parts[3])
    if (month !== undefined) {
      return new Date(year, month, day)
    }
  }

  // Try year-only format
  const yearOnly = parseInt(dateStr)
  if (!isNaN(yearOnly) && yearOnly > 1970 && yearOnly < 2100) {
    return new Date(yearOnly, 0, 1) // Use January 1st as default
  }

  return null
}

