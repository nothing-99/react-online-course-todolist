import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={lightTheme}>
    <HelmetProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </HelmetProvider>
  </ThemeProvider>
);
