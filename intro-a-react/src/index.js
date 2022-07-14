import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App, { AppSinJSX } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// para renderizar 
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// sin jsx
// root.render(React.createElement(AppSinJSX, null, null));
