// .eleventy.js - ES Module syntax
export default function (eleventyConfig) {
  // Copy these directories to the output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src", // Source files
      output: "_site", // Build directory
      includes: "_includes", // Templates
      layouts: "_layouts", // Layout templates
    },
    // Use .html files as templates
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
