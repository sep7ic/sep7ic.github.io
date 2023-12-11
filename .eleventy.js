module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/ayearinpixels.json");
  eleventyConfig.addPassthroughCopy("src/FuturamaTitles.txt");
  eleventyConfig.addPassthroughCopy("src/futurama.json");
  eleventyConfig.addPassthroughCopy("src/pages/borkcoard.json");
  eleventyConfig.addPassthroughCopy("src/XMB");

  eleventyConfig.addGlobalData("permalink", () => {
    return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });
  
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};