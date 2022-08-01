import React from "react";

import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./Components/App";

const root =ReactDOM.createROOT(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
    ,</ Router>
    document.getElementById("root")
);
