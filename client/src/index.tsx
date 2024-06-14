import { createRoot } from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./global.css";
import { docsRoute } from "virtual:module";

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
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(<App />);
