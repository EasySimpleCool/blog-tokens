// style-dictionary.config.js
import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// Register the Token Studio transforms properly
register(StyleDictionary, { 
  excludeParentKeys: false
});

// Export the configuration
export default {
  source: [
    'tokens/input.json',
    'tokens/displaymode/light.json',
    'tokens/displaymode/dark.json',
    'tokens/output.json',
    'tokens/comp/box-stack.json',
    'tokens/comp/button.json',
    'tokens/comp/container.json',
    'tokens/comp/image.json',
    'tokens/comp/post-detail.json',
    'tokens/comp/post-preview.json',
    'tokens/comp/section.json',
    'tokens/comp/tag.json',
    'tokens/$metadata.json',   // For tokenSetOrder
    'tokens/$themes.json' 
  ],
  // Add the preprocessor explicitly as mentioned in the docs
  preprocessors: ["tokens-studio"],
  // Add logging for better debugging
  log: {
    verbosity: "verbose",
  },
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      // transforms: ["name/kebab"],
      buildPath: "src/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            outputReferences: true,
            themedSelectors: {
              "site-dark": '@media (prefers-color-scheme: dark)',
            },
          },
        },
      ],
      // "expand": true
    },
  },
};
