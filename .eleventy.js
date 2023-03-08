module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/public");

  /** Converts the given date string to ISO8601 format. */
  const toISOString = (dateString) => new Date(dateString).toISOString();
  eleventyConfig.addFilter('toISOString', toISOString);

  const dateFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatDate = (date) => date.toLocaleDateString("en-GB", dateFormatOptions);
  eleventyConfig.addFilter('formatDate', formatDate);

  return {
    dir: {
      input: "src",
      output: "public"
    },
    passthroughFileCopy: true
  }
}