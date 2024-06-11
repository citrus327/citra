import { Command } from "commander"
import { run } from ".."

const pkg = require("../../package.json")

export const exe = () => {
  const program = new Command()
  program
    .name("citra")
    .description("A simple documentation generator for your project")
    .version(pkg.version, "-v, --version")

  program
    .command("start [source]")
    .description("start docit dev server")
    .action((source) => {
      run(source)
    })

    

  program.parse(process.argv)
}
