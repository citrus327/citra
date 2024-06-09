import { createRoot } from "react-dom/client"

const App = () => {
  return <div> app in react </div>
}

const container = document.getElementById("root")
const root = createRoot(container!) // createRoot(container!) if you use TypeScript

root.render(<App />)
