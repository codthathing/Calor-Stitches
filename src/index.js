import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import NavigateProvider from "./services/contexts/NavigateContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigateProvider>
      <App />
    </NavigateProvider>
  </StrictMode>
);
