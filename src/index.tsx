/**
 * Application Entry Point
 * Initializes the React application with routing and global providers
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./router";
import "./styles/tailwind.css";

// Get the root element
const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error("Failed to find the root element. Ensure there is an element with id 'app' in your HTML.");
}

// Render the application
createRoot(rootElement).render(
  <StrictMode>
    <Router>
      <AppRouter />
    </Router>
  </StrictMode>
);