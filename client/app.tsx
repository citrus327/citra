import { createRoot } from "react-dom/client"
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/home" element={<div>Home</div>} />,
    <Route path="/about" element={<div>About</div>} />,
    <Route path="/lazy" lazy={() => import("./routes/home")} />,
  ]),
)

const App = () => {
  return <RouterProvider router={router} />
}

const container = document.getElementById("root")
const root = createRoot(container!) // createRoot(container!) if you use TypeScript

root.render(<App />)
