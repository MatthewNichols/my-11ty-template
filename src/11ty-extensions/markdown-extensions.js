import markdownItAttrs from "markdown-it-attrs";
/**
 * Adds markdown extensions to eleventy's markdown parser.
 * @param {*} eleventyConfig 
 */
export function registerMarkdownExtensions(eleventyConfig) {
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAttrs));
}