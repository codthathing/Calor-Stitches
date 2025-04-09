import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import NavigateProvider from "./services/contexts/NavigateContext";
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigateProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </NavigateProvider>
  </StrictMode>
);
