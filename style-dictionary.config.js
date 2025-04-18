const { transform } = require("@tokens-studio/sd-transform");

module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      transforms: ["attribute/cti", "name/cti/kebab", "color/css"],
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
  // Use TokenStudio transformer
  parsers: [
    {
      pattern: /\.json$/,
      parse: ({ contents }) => {
        return transform({ tokens: JSON.parse(contents) });
      },
    },
  ],
};
