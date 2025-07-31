import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/theme-provider";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <GoogleOAuthProvider clientId="690425401296-92gfem9jvq3o7rh4u7d8hnqg7kr1u5ef.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </ThemeProvider>

);