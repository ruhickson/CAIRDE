# Irish Games Media Archive

## Overview

This folder contains a structured media archive for all games developed by Irish developers. The archive is organized by release year, with each game having its own folder containing media links, cultural context, and developer resources.

## Purpose

This archive serves as a comprehensive preservation effort, documenting:
- **Cultural Context**: The impact of Irish game development on the industry and culture
- **Media Coverage**: Reviews, articles, and news coverage about each game
- **Developer Resources**: Interviews, behind-the-scenes content, GDC talks, and making-of materials

## Structure

The archive is organized hierarchically:

```
media archive/
├── {YEAR}/
│   ├── {app_id}_{game_name}/
│   │   └── media_archive.md
```

For example:
- `2010/70300_VVVVVV/media_archive.md`
- `2012/221640_Super Hexagon/media_archive.md`
- `2014/270330_Ku: Shroud of the Morrigan/media_archive.md`

## Media Archive Document Format

Each game folder contains a `media_archive.md` file with the following structure:

### Header Information
- Steam App ID
- Developer name
- Release Year
- Archive Date

### Sections

1. **Cultural Context**
   - Links to articles and resources about the game's cultural impact
   - Irish game development industry context
   - Historical significance

2. **Media Coverage**
   - Reviews from gaming publications
   - News articles and press coverage
   - Feature articles

3. **Developer Interviews & Behind the Scenes**
   - Developer interviews
   - Behind-the-scenes content
   - GDC talks and postmortems
   - Making-of documentaries

## Generation Process

### Initial Setup
1. Created folder structure organized by release year
2. Created individual game folders using format: `{app_id}_{sanitized_game_name}`
3. Generated template `media_archive.md` files for all 174 games

### Population Process
The archive is designed to be populated through:
- Automated web searches (via `complete_media_population.py`)
- Manual curation using search queries from `search_queries.txt`
- Community contributions

### Search Strategy
For each game, three types of searches are performed:
1. **Cultural Context**: `"{game_name}" Irish game development cultural impact`
2. **Media Coverage**: `"{game_name}" review article news`
3. **Developer Interviews**: `"{developer}" interview "{game_name}" behind the scenes`

## Data Source

- **Database**: Supabase PostgreSQL database
- **Table**: `games_from_ireland` (joined with `games` table)
- **Total Games**: 174 games
- **Date Range**: 2010 - 2025 (plus "Unknown Year" for games without release dates)

## Related Files

### Scripts
- `create_media_archive.py` - Creates the folder structure
- `populate_media_archive.py` - Initial template generation
- `complete_media_population.py` - Main processing script for all games
- `search_media_for_games.py` - Generates search queries

### Reference Files
- `games_to_process.json` - List of all games with metadata
- `search_queries.txt` - Suggested search queries for manual population
- `AUTO_SEARCH_INSTRUCTIONS.md` - Instructions for automated searching

## Current Status

- ✅ Folder structure created for all 174 games
- ✅ Template documents created for all games
- ✅ Search queries generated for all games
- ⏳ Media links population (in progress - can be done manually or via automated searches)

## URL Extraction

The system includes URL extraction functionality that:
- Extracts URLs from web search results
- Handles both markdown links `[text](url)` and plain URLs
- Filters out tracking parameters and non-article URLs
- Limits to 5 URLs per category to maintain quality

## Manual Population Guide

To manually populate a game's media archive:

1. Open the game's `media_archive.md` file
2. Use the search queries from `search_queries.txt` for that specific game
3. Perform web searches for:
   - Cultural context
   - Media coverage
   - Developer interviews
4. Add found links to the appropriate sections in markdown format:
   ```markdown
   - [Article Title](https://example.com/article)
     > Brief description or snippet
   ```

## Automated Population

The `complete_media_population.py` script can process all games:
- Performs web searches for each game
- Extracts URLs from search results
- Updates `media_archive.md` files automatically
- Processes games in batches to manage rate limits

## Notes

- All game names are sanitized for folder names (special characters replaced with underscores)
- Games without release dates are placed in "Unknown Year" folder
- Each document includes an archive date for tracking when it was last updated
- Links should be verified for accuracy and accessibility
- The archive is designed to be a living document, updated as new resources are discovered

## Future Maintenance

To update the archive:
1. Run `complete_media_population.py` to refresh all documents
2. Or manually update individual game documents
3. Consider periodic reviews to verify link accessibility
4. Add new resources as they become available

## Related Archive

See also: `irish blurbs/` folder for documentary-style game descriptions that complement this media archive.

