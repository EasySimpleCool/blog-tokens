# Focused Product Requirements Document (PRD) - Q's Tokens: Phase 3 - Multi-Theme

**Version:** 1.0
**Date:** [Insert Current Date]

## 1. Introduction & Vision

**Project:** Q's Blog - A minimalist blog demonstrating a pure HTML/CSS, design token-driven workflow using Eleventy.

**Current State:** A functional static blog styled using CSS variables derived from design tokens via Style Dictionary. Core components (Button, Tag, Post Preview, etc.) are implemented and styled using `comp` tokens. The site currently has a single (light) theme.

**Phase 3 Vision:** To implement automatic light and dark theme support based on user operating system preference, leveraging the existing design token architecture. The themes should be applied purely through CSS, without requiring client-side JavaScript for the switching mechanism itself.

## 2. Phase 3 Goals

*   **Define Theme Tokens:** Create light and dark theme variations for relevant design tokens (primarily colors).
*   **Update Token Processing:** Configure Style Dictionary to output CSS variables that support theme switching via `prefers-color-scheme`.
*   **Refine CSS:** Ensure CSS rules correctly utilize the themed variables.
*   **Maintain Minimalism:** Achieve theme switching using CSS media queries (`prefers-color-scheme`) without adding JavaScript for the core switching logic.

## 3. Scope

**In Scope for Phase 3:**

1.  **Token Definition:**
    *   Identify tokens requiring theme variations (e.g., `output.color.fg.*`, `output.color.bg.*`, `output.color.accent.*`, `output.color.border.*`, relevant `comp.*` color tokens).
    *   Define light and dark mode values for these tokens within the `tokens/tokens.json` structure, likely using Tokens Studio's "Themes" or different token sets/files.
2.  **Style Dictionary Configuration:**
    *   Update `style-dictionary.config.js` to process theme tokens.
    *   Configure the `css/variables` format to output CSS variables scoped appropriately for light mode (default `:root`) and dark mode (`@media (prefers-color-scheme: dark)`).
3.  **CSS Refinement:**
    *   Verify that all CSS rules consuming color tokens work correctly in both light and dark modes. Adjust rules if necessary (e.g., if a component needs slightly different non-color styles between themes, though this should be minimized).
4.  **Testing:**
    *   Manually test the site in browsers with light and dark mode preferences enabled to ensure correct theme application.

**Out of Scope for Phase 3:**

*   JavaScript-based theme toggle switch for user override.
*   Storing user theme preference in local storage.
*   More than two themes (light/dark).
*   Theming based on factors other than `prefers-color-scheme`.
*   Adding new components specifically for theming.

## 4. Requirements

**4.1. Token Structure for Themes:**

*   **R1.1:** Identify all color tokens (and potentially other tokens like shadows if added later) that need different values for light and dark themes.
*   **R1.2:** In `tokens/tokens.json` (or potentially linked files if using Tokens Studio multi-file sync), define the dark mode values for the identified tokens. A common approach is to have base tokens and theme-specific overrides. Example structure using separate sets (adapt based on your Tokens Studio setup):
    ```json
    // tokens/tokens.json (simplified example)
    {
      "output": { "$value": ..., "$type": ... }, // Contains base colors
      "theme/dark": {
         "output": {
             "color": {
                 "fg": {
                     "primary": { "$type": "color", "$value": "#FFFFFF" } // Dark mode override
                 },
                 "bg": {
                     "middle": { "$type": "color", "$value": "#1A1A1A" } // Dark mode override
                 }
                 // ... other dark overrides
             }
         }
      },
      "$themes": [
         { "name": "light", "selectedTokenSets": { "output": "enabled" } },
         { "name": "dark", "selectedTokenSets": { "output": "enabled", "theme/dark": "enabled" } }
      ]
      // ... rest of tokens
    }
    ```
*   **R1.3:** Ensure token references (`{output.color.fg.primary}`) remain consistent in `comp` tokens; the theming mechanism should resolve the correct value based on the theme context.

**4.2. Style Dictionary Output:**

*   **R2.1:** Modify `style-dictionary.config.js` to process the themes defined in `tokens.json`.
*   **R2.2:** Configure the `css/variables` format options to generate CSS that uses the `prefers-color-scheme` media query. The output in `src/css/variables.css` should resemble:
    ```css
    :root {
      /* Light mode (or base) variables */
      --output-color-fg-primary: #343a41;
      --output-color-bg-middle: #e8edf4;
      /* ... other light/base variables */
    }

    @media (prefers-color-scheme: dark) {
      :root { /* Or a specific class like html[data-theme="dark"] if preferred */
        /* Dark mode overrides */
        --output-color-fg-primary: #FFFFFF;
        --output-color-bg-middle: #1A1A1A;
        /* ... other dark variables */
      }
    }
    ```
    *Note: Achieving this exact output might require custom formatters/options or careful use of sd-transforms features.*

**4.3. CSS Usage:**

*   **R3.1:** No changes should be *required* in `src/css/main.css` regarding *how* variables are used (e.g., `color: var(--output-color-fg-primary)`). The browser will automatically apply the correct variable value based on the media query.
*   **R3.2:** Review components in both light and dark modes. If any component looks visually broken *only* in one mode due to the color changes (e.g., insufficient contrast), minor CSS adjustments (potentially using new theme-specific tokens) might be needed.

## 5. Technical Considerations

*   **Style Dictionary Theming:** Research the best way to configure Style Dictionary + `@tokens-studio/sd-transforms` to output theme-scoped variables for `prefers-color-scheme`. This might involve using multiple platform outputs, custom formats, or specific transform options. The `sd-transforms` documentation on themes is key here.
*   **`prefers-color-scheme`:** Rely solely on this CSS media query for detection and application.
*   **Token Granularity:** Ensure all necessary color values are tokenized so they can be themed. Avoid hardcoded colors in CSS.

## 6. Future Considerations (Post-Phase 3)

*   Add a JS-based toggle switch to allow user overrides.
*   Persist user preference (e.g., in `localStorage`).
*   Explore more sophisticated theming options if needed.

## 7. Success Metrics

*   The blog automatically switches between light and dark themes based on OS preference when viewed in supporting browsers.
*   Both themes are styled correctly using the defined design tokens.
*   The implementation uses only CSS for the automatic switching mechanism.
*   The token processing pipeline correctly generates the themed CSS variables.