import { Plugin, createServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import virtual from "vite-plugin-virtual";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

const run = async (pwd: string = process.cwd()) => {
  const _pwd = path.isAbsolute(pwd) ? pwd : path.resolve(process.cwd(), pwd);
  console.log("user runs at ", _pwd);

  const clientPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../client"
  );

  // get index.ts or index.tsx from _pwd and analyze it
  const entry = path.resolve(_pwd, "src/index.tsx");
  const docEntry = path.resolve(_pwd, "docs/test.mdx");

  console.log("entry path", entry);

  // 目标环境使用什么jsx完全看这里如何配置。
  const JSX_RUNTIME = "automatic";

  const server = await createServer({
    root: clientPath,
    plugins: [
      {
        enforce: "pre",
        ...mdx({
          jsxRuntime: JSX_RUNTIME,
        }),
      } as Plugin,
      react({
        jsxRuntime: JSX_RUNTIME,
      }),
      virtual({
        "virtual:module": [docEntry],
        "virtual:config": { hello: "world" },
      }),
    ],
  });

  await server.listen(3000);

  server.openBrowser();
};

export { run };
