import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { HashRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./app/store";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);
