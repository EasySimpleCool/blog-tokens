# Minimal Tokens Blog

A lightweight blog implementation that uses design tokens for consistent styling. This project demonstrates how to set up a lean HTML/CSS site with Tokens Studio integration.

## Features

- Pure HTML and CSS implementation (no JavaScript)
- Design tokens integration via Tokens Studio
- Automated token processing via GitHub Actions
- Three text styles: Big (40px, Bold), Medium (24px, Semibold), and Small (16px, Regular)
- Color token system

## Setup

1. Clone this repository

```bash
git clone https://github.com/yourusername/minimal-tokens-blog.git
cd minimal-tokens-blog
```

2. Install dependencies

```bash
npm install
```

3. Process tokens

```bash
npm run process-tokens
```

4. Open `src/index.html` in your browser to view the site

## Working with Design Tokens

### Local Development

1. Edit token files in the `tokens` directory
2. Run `npm run process-tokens` to update CSS variables
3. View changes in the browser

### Using Tokens Studio for Figma

1. Install [Tokens Studio for Figma](https://tokens.studio/)
2. In the plugin, go to Settings > Sync > GitHub
3. Configure with:

   - Repository: `yourusername/minimal-tokens-blog`
   - Branch: `main`
   - File path: `tokens/tokens.json`
   - Personal access token: [Create one in GitHub](https://github.com/settings/tokens) with repo access

4. Changes pushed from Tokens Studio will automatically trigger the GitHub Action to update CSS variables

## Project Structure

```
minimal-tokens-blog/
├── .github/             # GitHub Actions workflows
├── tokens/              # Design token definitions
├── src/                 # Source HTML and CSS
│   ├── css/
│   │   ├── main.css     # Main stylesheet
│   │   └── variables.css # Generated from tokens (don't edit directly)
│   └── index.html       # Example page
├── style-dictionary.config.js # Token processing configuration
└── package.json
```

## License

MIT
