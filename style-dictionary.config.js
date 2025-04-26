// style-dictionary.config.js
import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// Register the Token Studio transforms properly
register(StyleDictionary);

// Export the configuration
export default {
  source: ["tokens/tokens.json"],
  // Add the preprocessors configuration
  preprocessors: ["tokens-studio"],
  // Add verbosity logging for better debugging
  log: {
    verbosity: "default",
  },
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      transforms: ["name/kebab"],
      buildPath: "src/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
};
