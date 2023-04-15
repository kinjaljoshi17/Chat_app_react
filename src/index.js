import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import Welcome from "./components/Welcome";
import "./styles/chat.css";
import "./styles/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);
