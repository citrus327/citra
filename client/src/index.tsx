import { createRoot } from "react-dom/client";
import "./global.css";
import Root from "@@@root";

const App = () => {
  return <Root />;
};

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<App />);
