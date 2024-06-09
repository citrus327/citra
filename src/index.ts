import { createServer } from "vite"
import path from "path"
import { fileURLToPath } from "url"

const run = async (pwd: string = process.cwd()) => {
  const _pwd = path.isAbsolute(pwd) ? pwd : path.resolve(process.cwd(), pwd)
  console.log("user runs at ", _pwd)

  const clientPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../client",
  )
  const server = await createServer({
    root: clientPath,
  })

  await server.listen(3000)

  server.openBrowser()
}

export { run }
