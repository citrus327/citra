function run() {
  import("../dist/cli/index.mjs").then((module) => {
    module.exe()
  })
}

run()
