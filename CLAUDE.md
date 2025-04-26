# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `npm run process-tokens` - Process design tokens from tokens.json to CSS variables
- `npm run dev` - Start development server with browser-sync on port 3000
- `npm install` - Install project dependencies

## Code Style Guidelines
- Follow W3C Design Tokens Community Group (DTCG) format for token definitions
- Preserve exact token naming from Figma + Tokens Studio
- Maintain token references using `{name}` syntax
- Use CSS variables for styling implementation
- HTML files should be semantic and accessible
- CSS organization: variables.css for token-based variables, main.css for styling

## Project Structure
- `/tokens` - Source design tokens (tokens.json)
- `/src/css` - CSS files including token-generated variables
- `/src/index.html` - Main HTML file
- `style-dictionary.config.js` - Configuration for token processing