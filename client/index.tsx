import { createRoot } from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import a from "virtual:module";

console.log(a);
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<div>Home</div>} />,
    <Route path="/lazy" lazy={() => import("./routes/home")} />,
    <Route
      path="/d"
      lazy={() =>
        import(a[0]).then((module) => {
          return { Component: module.default };
        })
      }
    />,
  ])
);

const App = () => {
  return <RouterProvider router={router} />;
};

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(<App />);
