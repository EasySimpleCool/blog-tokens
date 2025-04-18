import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// Register the transforms
register(StyleDictionary);

export default {
  source: ["tokens/**/*.json"],
  preprocessors: ["tokens-studio"], // Required for DTCG tokens
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      transforms: ["name/kebab"], // Use kebab case for CSS variables
      buildPath: "src/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            selector: ":root",
          },
        },
      ],
    },
  },
};
