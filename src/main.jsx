import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from 'react-router-dom';

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Import global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
