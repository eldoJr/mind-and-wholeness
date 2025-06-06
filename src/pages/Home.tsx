// src/pages/Home.tsx
import Navbar from "../components/layout/navbar";
import { Hero } from "../components/layout/hero";
import Support from "../components/layout/support";
import Highlights from "../components/layout/highlights";
import Newsletter from "../components/layout/newsletter";
import Testimonial from "../components/layout/testimonial";
import Footer from "../components/layout/footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Support />
        <Highlights />
        <Newsletter />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
