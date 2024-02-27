import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeCustomization from "./themes/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeCustomization>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeCustomization>
);
