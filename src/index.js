import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";

import "../src/Chatapppages/style.css";

import Homepage from "./Chatapppages/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Homepage name="homepage" />
  </React.StrictMode>
);

reportWebVitals();
