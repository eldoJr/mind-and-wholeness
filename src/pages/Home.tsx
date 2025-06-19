// src/pages/Home.tsx
import { Hero } from "../components/layout/hero";
import Support from "../components/layout/support";
import Highlights from "../components/layout/highlights";
import Newsletter from "../components/layout/newsletter";
import MeditativeThemes from "../components/layout/meditations";
import Testimonial from "../components/layout/testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Support />
      <Highlights />
      <Newsletter />
      <MeditativeThemes />
      <Testimonial />
    </>
  );
}