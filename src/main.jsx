import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/theme-provider";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
      <App />
  </ThemeProvider>

);