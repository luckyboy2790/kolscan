import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./context/AppContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </StrictMode>
);
