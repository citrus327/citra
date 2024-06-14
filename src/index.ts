import { Plugin, createServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import virtual from "vite-plugin-virtual";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { globSync } from "glob";

const run = async (pwd: string = process.cwd()) => {
  const _pwd = path.isAbsolute(pwd) ? pwd : path.resolve(process.cwd(), pwd);
  console.log("user runs at ", _pwd);

  const clientPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../client"
  );

  const matched = globSync("**/*.{md,mdx}", {
    absolute: false,
    cwd: _pwd,
  });

  // [
  //   "docs/test.mdx",
  //   "docs/test copy.mdx",
  //   "docs/test copy 4.mdx",
  //   "docs/test copy 3.mdx",
  //   "docs/test copy 2.mdx",
  // ];
  console.log(matched);

  const docsRoute = matched.map((o) => {
    return {
      routePath: "/" + o.replace(/\.mdx?$/, "").replace(/ /g, "-"),
      absFilePath: path.resolve(_pwd, o),
    };
  });

  // 目标环境使用什么jsx完全看这里如何配置。
  const JSX_RUNTIME = "automatic";

  const server = await createServer({
    root: path.resolve(clientPath, "./src"),
    css: {
      postcss: path.resolve(_pwd),
    },
    resolve: {
      alias: {
        "@@@root": path.resolve(_pwd),
      },
    },
    plugins: [
      {
        enforce: "pre",
        ...mdx({
          jsxRuntime: JSX_RUNTIME,
        }),
      } as Plugin,
      react({
        jsxRuntime: JSX_RUNTIME,
        include: /\.(mdx|js|jsx|ts|tsx)$/,
      }),
      virtual({
        "virtual:module": `export const docsRoute = ${JSON.stringify(docsRoute, null, 2)};`,
      }),
    ],
  });

  await server.listen(3000);

  server.openBrowser();
};

export { run };
