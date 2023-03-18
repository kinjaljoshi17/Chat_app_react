
import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";


import '../src/Chatapppages/style.css';
import Login from "./Chatapppages/Login.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Login />
    </React.StrictMode>
);

reportWebVitals();
