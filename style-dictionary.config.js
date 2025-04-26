import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// Register the Token Studio transforms
register(StyleDictionary);

// Add custom name transform to preserve Figma naming structure
StyleDictionary.registerTransform({
  name: 'name/figma',
  type: 'name',
  transformer: (token) => {
    // Return CSS variable names with dashes and preserve the Figma naming structure
    return token.path.join('-');
  }
});

// Create a custom transform group based on tokens-studio but with our name transform
StyleDictionary.registerTransformGroup({
  name: 'tokens-studio-figma',
  transforms: [
    // First include all the transforms from tokens-studio
    ...StyleDictionary.transformGroup['tokens-studio'],
    // Then add our custom name transform last to override the default
    'name/figma'
  ]
});

export default {
  source: ["tokens/tokens.json"],
  platforms: {
    css: {
      transformGroup: "tokens-studio-figma", // Use our custom transform group
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
