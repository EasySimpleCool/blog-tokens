import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// Register the transforms
register(StyleDictionary);

// IMPORTANT: Never modify the token structure or naming that comes from Figma + Tokens Studio
// This configuration is set up to preserve the exact token names as they come from the design system

export default {
  source: ["tokens/**/*.json"],
  preprocessors: ["tokens-studio"], // Required for DTCG tokens
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      // No name transforms - preserve original structure
      // "name/kebab" is removed to ensure we don't modify token names
      buildPath: "src/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            selector: ":root",
            // Preserve the original token structure
            outputReferences: true,
          },
        },
      ],
    },
  },
};
