import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Initialize React root
const root = createRoot(document.getElementById("root"));

// Render App within BrowserRouter for routing
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);