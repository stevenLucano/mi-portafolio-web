import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ResProvider from "./context/ResProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ResProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ResProvider>
);
