import merge from "deepmerge";
import { createBasicConfig } from "@open-wc/building-rollup";

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: './client-side-compiled/main.js',
  output: {
    dir: null,
    file: '_site/scripts/main.bundled.js'
  }
})