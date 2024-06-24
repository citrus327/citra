import { Plugin, createServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

const run = async (pwd: string = process.cwd()) => {
  const _pwd = path.isAbsolute(pwd) ? pwd : path.resolve(process.cwd(), pwd);
  console.log("user runs at ", _pwd);

  const clientPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../client"
  );

  // 目标环境使用什么jsx完全看这里如何配置。
  const JSX_RUNTIME = "automatic";

  const server = await createServer({
    root: path.resolve(clientPath, "./src"),
    css: {
      postcss: path.resolve(_pwd),
    },
    resolve: {
      alias: {
        "@@@root": path.resolve(path.join(_pwd, "./src/index.tsx")),
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
    ],
  });

  await server.listen(3000);

  server.openBrowser();
};

export { run };
