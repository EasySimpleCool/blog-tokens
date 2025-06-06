# Blog Tokens

A lightweight blog implementation that uses design tokens for consistent styling. This project demonstrates how to set up a lean HTML/CSS site with Tokens Studio integration.

## Features

- Pure HTML and CSS implementation (no JavaScript)
- Design tokens integration via Tokens Studio for Figma
- Automated token processing via GitHub Actions
- CSS variable-based styling with design tokens
- W3C Design Tokens Community Group (DTCG) format support

## Setup

1. Clone this repository

```bash
git clone https://github.com/yourusername/blog-tokens.git
cd blog-tokens
```

2. Install dependencies

```bash
npm install
```

3. Process tokens

```bash
npm run process-tokens
```

4. Start the development server

```bash
npm run dev
```

This will open your default browser with the site and automatically refresh when you make changes.

## Working with Design Tokens

### Local Development

1. Edit token files in the `tokens` directory
2. Run `npm run process-tokens` to update CSS variables
3. Run `npm run dev` to start the local development server with auto-reload
4. Make changes to HTML or CSS files and see them update in real-time

### Using Tokens Studio for Figma

1. Install [Tokens Studio for Figma](https://tokens.studio/)
2. In the plugin, go to Settings > Sync > GitHub
3. Configure with:

   - Repository: `yourusername/blog-tokens`
   - Branch: `main`
   - File path: `tokens/`
   - Personal access token: [Create one in GitHub](https://github.com/settings/tokens) with repo access

4. Changes pushed from Tokens Studio will automatically trigger the GitHub Action to update CSS variables

## IMPORTANT: Token Naming Preservation

This project is configured to preserve the exact token naming structure from Figma + Tokens Studio:

- **NEVER modify the token structure or naming** that comes from Figma + Tokens Studio
- Figma + Tokens Studio is the **single source of truth** for token naming
- The Style Dictionary configuration preserves original token references
- When using W3C DTCG format, token values will use `$type` and `$value` properties
- References must be updated to include the appropriate path and `$value` (e.g., `{input.40.$value}`)

## Project Structure

```
blog-tokens/
├── .github/             # GitHub Actions workflows
├── tokens/              # Design token definitions
├── src/                 # Source HTML and CSS
│   ├── css/
│   │   ├── main.css     # Main stylesheet
│   │   └── variables.css # Generated from tokens (don't edit directly)
│   └── index.html       # Example page
├── style-dictionary.config.js # Token processing configuration
├── PROJECT.md           # Product requirements document
└── package.json
```

## Requirements

- Node.js v18 or higher
- Style Dictionary v4.3+
- @tokens-studio/sd-transforms v1.3.0+

## Troubleshooting

### Common Issues

#### Token References Not Resolving

- When using W3C DTCG format, make sure references include the `$value` suffix
- Example: Change `{40}` to `{input.40.$value}`

#### Missing Typography Values

- Typography tokens are composite tokens and require proper expansion
- The `transformGroup: "tokens-studio"` handles this automatically

#### GitHub Action Failures

- Ensure package.json has the correct version of @tokens-studio/sd-transforms
- Use compatible versions of Style Dictionary and @tokens-studio/sd-transforms

## License

MIT

## Storybook Integration

This project includes Storybook for component development and documentation. The Storybook is configured to work with the project's design token system and theming.

### Features

- **Theme Switching**: Use the theme selector in the Storybook toolbar to switch between light and dark themes
- **Color Schemes**: Use the color selector to switch between blue, purple, and yellow color schemes  
- **Design Tokens**: All components use the same design tokens as the main application
- **Button Showcase**: Comprehensive button stories showing standard buttons and switch-button elements

### Running Storybook

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006`.

### Theme Controls

In Storybook, you'll find two controls in the toolbar:
- **Theme**: Switch between Light and Dark themes
- **Color**: Switch between Blue, Purple, and Yellow color schemes

The theming system dynamically loads the appropriate CSS variables to match your selection, ensuring that components render exactly as they would in the main application.

### Button Components

The Button stories showcase:
- **Default Button**: Standard button with full width
- **Disabled Button**: Shows disabled state styling
- **Auto Width Button**: Button that sizes to content
- **Long Text Button**: Tests text wrapping behavior
- **Theme Switcher**: Shows the light/dark theme toggle buttons
- **Color Switcher**: Shows the color scheme selection buttons
- **Complete Theme Controls**: Combined layout showing both control types
