import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Suppress WebGL extension warnings globally
const originalWarn = console.warn;
console.warn = function(...args: any[]) {
  const message = args[0]?.toString() || '';
  if (
    message.includes('WEBGL_lose_context') ||
    message.includes('extension not supported') ||
    message.includes('WEBGL_lose_context extension')
  ) {
    return; // Suppress WebGL extension warnings
  }
  originalWarn.apply(console, args);
};

createRoot(document.getElementById("root")!).render(<App />);
