import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// Register the Token Studio transforms
register(StyleDictionary);

// IMPORTANT: Never modify the token structure or naming that comes from Figma + Tokens Studio
// This configuration is set up to preserve the exact token names as they come from the design system

export default {
  source: ["tokens/tokens.json"],
  platforms: {
    css: {
      transformGroup: "tokens-studio",
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
