// style-dictionary.config.js
import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// Register the Token Studio transforms properly
register(StyleDictionary);

// Export the configuration
export default {
  source: [
    'tokens/**/*.json',
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
      transforms: ["name/kebab"],
      buildPath: "src/css/",
      files: [
        {
          destination: "_variables-%theme%.css",
          format: "css/variables",
          options: {
            usesDtcg: true,
            outputReferences: true,
          },
        },
      ],
      "expand": true
    },
  },
};
