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
      transformGroup: "tokens-studio", // Use the predefined transform group
      buildPath: "src/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            selector: ":root",
            outputReferences: true,
          },
        },
      ],
    },
  },
};
