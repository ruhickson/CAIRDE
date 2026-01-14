# Irish Games Blurbs Archive

## Overview

This folder contains documentary-style blurbs for all games developed by Irish developers, as identified in the `games_from_ireland` database table. Each blurb is written in an archival/documentary style, preserving the cultural and historical significance of these games within Ireland's digital game development heritage.

## Purpose

These blurbs serve as archival documentation, capturing:
- Game titles and their release information
- Developer and publisher information
- Cultural context within Irish game development
- Critical reception and player reviews
- Genre classifications
- Historical significance

## Structure

Each game has a dedicated text file named in the format: `{app_id}_{game_name}.txt`

For example:
- `70300_VVVVVV.txt` - VVVVVV by Terry Cavanagh (2010)
- `221640_Super Hexagon.txt` - Super Hexagon by Terry Cavanagh (2012)

## Blurb Format

Each blurb follows a documentary/archival structure:

1. **Documented Title**: Game name and release year
2. **Archival Introduction**: Developer, publisher, and cultural context
3. **Critical Reception**: Review scores and player feedback
4. **Description**: Game description and details
5. **Archival Reference**: Steam App ID for reference

## Generation Process

These blurbs were automatically generated from the `games_from_ireland` table in the Supabase database, which contains:
- Game metadata from Steam API
- Developer and publisher information
- Release dates
- Review summaries and counts
- Genre and category information

The generation script (`generate_irish_blurbs.py`) was designed to:
1. Fetch all games from the `games_from_ireland` table
2. Extract relevant metadata (developer, publisher, release year, descriptions, reviews)
3. Format the information into documentary-style blurbs
4. Save each blurb as a separate text file

## Data Source

- **Database**: Supabase PostgreSQL database
- **Table**: `games_from_ireland` (joined with `games` table)
- **API**: Steam API (via `steam_to_supabase_pipeline`)
- **Last Updated**: November 2025

## Related Files

- `generate_irish_blurbs.py` - Script used to generate these blurbs
- `media archive/` - Related media archive folder with cultural context, media coverage, and developer interviews

## Notes

- All blurbs are written in a consistent documentary/archival style
- Information is sourced from Steam API data and database records
- Release years are extracted from `release_date_actual` or parsed from `release_date` JSON field
- Developer and publisher information comes from JSON arrays in the database
- Review information includes both review score descriptions and review counts

## Future Maintenance

To regenerate or update blurbs:
1. Ensure the `games_from_ireland` table is up to date
2. Run `generate_irish_blurbs.py` to regenerate all blurbs
3. The script will overwrite existing files with updated information

