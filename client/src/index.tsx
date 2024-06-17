import { createRoot } from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./global.css";
import { docsRoute } from "virtual:module";
import { MDXProvider } from "@mdx-js/react";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<div className="text-red-200">Home</div>} />,
    ...docsRoute.map((route) => {
      console.log(route);
      return (
        <Route
          path={route.routePath}
          lazy={() =>
            import(route.absFilePath).then((module) => ({
              Component: module.default,
            }))
          }
        />
      );
    }),
  ])
);

const App = () => {
  return <RouterProvider router={router} />;
};

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <MDXProvider
    disableParentContext
    components={{
      h2: (props) => {
        console.log(props);
        return <h1>123</h1>;
      },
      pre: () => {
        return <div>codeblock!!</div>;
      },
    }}
  >
    <App />
  </MDXProvider>
);
