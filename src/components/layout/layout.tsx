// src/components/layout/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-emerald-50 text-gray-900">
      <Navbar />
      <main className="min-h-screen pt-[64px] sm:pt-[64px] lg:pt-[64px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
