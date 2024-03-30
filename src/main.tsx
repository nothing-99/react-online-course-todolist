import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>
);
