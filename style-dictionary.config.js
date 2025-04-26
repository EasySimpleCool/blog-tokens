import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// Register the Token Studio transforms
register(StyleDictionary);

// Add custom formats, transforms, or parsers if needed
StyleDictionary.registerTransform({
  name: "fixReferences",
  type: "value",
  transitive: true,
  matcher: (token) =>
    token.original.value &&
    typeof token.original.value === "string" &&
    token.original.value.includes("{"),
  transformer: (token) => {
    // This helps fix reference issues by ensuring they point to the right path
    return token.original.value;
  },
});

export default {
  source: ["tokens/tokens.json"],
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      // Add extra transforms if needed
      transforms: ["fixReferences"],
      buildPath: "src/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            selector: ":root",
            outputReferences: true,
            // These options help with W3C format handling
            tokenFormat: "w3c",
            showFileHeader: false,
          },
        },
      ],
    },
  },
  // Better handling of references
  parsers: [
    {
      pattern: /\.json$/,
      parse: ({ contents }) => {
        return JSON.parse(contents);
      },
    },
  ],
};
