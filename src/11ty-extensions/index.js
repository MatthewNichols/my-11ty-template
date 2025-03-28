
/**
 * Register any 11ty extensions
 * @param {*} eleventyConfig Thee eleventy config object
 */
export function registerExtensions(eleventyConfig) {

  /**
   *  Cache busting. Start with the simplest possible implementation first
   */
  eleventyConfig.addFilter("cacheBustedUrl", (url) => {
    return `${url}?v=${Date.now()}`;
  });

}