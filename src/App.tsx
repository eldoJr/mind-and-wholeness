// src/App.tsx
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { LanguageProvider } from "./context/LanguageContext";
import "./index.css";

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

export default App;