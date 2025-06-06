// src/pages/Home.tsx
import Navbar from "../components/layout/navbar";
import { Hero } from "../components/layout/hero";
import Support from "../components/layout/support";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Support />
      </main>
    </div>
  );
}
