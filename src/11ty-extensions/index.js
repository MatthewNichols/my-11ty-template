import { registerCacheBuster } from "./cache-buster.js";
import { registerMarkdownExtensions } from "./markdown-extensions.js";

export function registerExtensions(eleventyConfig, sourcePathMap = {}) {
  registerCacheBuster(eleventyConfig, sourcePathMap);
  registerMarkdownExtensions(eleventyConfig);
}