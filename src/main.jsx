import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/leftProfile.css";
import "./styles/rightPanel.css";
import "./styles/tabs.css";
import "./styles/markdown.css";
import "./styles/terminal.css";
import "./styles/icons.css";
import "./styles/animations.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
