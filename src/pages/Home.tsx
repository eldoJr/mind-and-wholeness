// src/pages/Home.tsx
import { Hero } from "../components/layout/hero";
import Support from "../components/layout/support";
import LoginCTA from "../components/layout/LoginCTA";
import Highlights from "../components/layout/highlights";
import MeditativeThemes from "../components/layout/meditations";
import { NewsletterBanner, SubscribeForm } from "../components/ui";
import ManifestoStrip from "../components/ui/ManifestoStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <Support />
      <LoginCTA />
      <Highlights />
      <NewsletterBanner />
      <ManifestoStrip />
      <div className="bg-gradient-to-br from-white via-emerald-50 to-green-100">
        <MeditativeThemes />
        <SubscribeForm />
      </div>
    </>
  );
}