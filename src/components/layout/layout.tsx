// src/components/layout/Layout.tsx
import { ThemeProvider } from "../../context/ThemeContext";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function AboutLayout() {
  return (
    <ThemeProvider>
      <div className="bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen">
          <Outlet /> {/* Isso renderizará a página específica */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}