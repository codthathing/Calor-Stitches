import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./style.css";
import { NavigateProvider } from "./services/contexts/NavigateContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavigateProvider>
  </StrictMode>
);
