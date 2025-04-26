// style-dictionary.config.js
import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// Register the Token Studio transforms properly
register(StyleDictionary);

// Export the configuration
export default {
  source: ["tokens/tokens.json"],
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      transforms: ["name/kebab"],
      buildPath: "build/css/",
      files: [
        {
          destination: "_variables.css",
          format: "css/variables",
        },
      ],
    },
  },
};
