import { defineConfig } from "tsup"

export default defineConfig((options) => {
  console.log({ options })
  return {
    entry: ["src/index.ts", "src/cli/index.ts"],
    splitting: false,
    sourcemap: options.watch ? "inline" : false,
    clean: true,
    minify: !options.watch,
    shims: true,
    format: ["cjs", "esm"],
    dts: true,
  }
})
