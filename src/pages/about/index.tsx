// src/pages/about/index.tsx
import { StorySection } from "../../components/sections/about/StorySection";
import { MissionSection } from "../../components/sections/about/MissionSection";
import { TeamSection } from "../../components/sections/about/TeamSection";
import { ValuesGrid } from "../../components/sections/about/ValuesGrid";

export default function AboutPage() {
  return (
    <div className="space-y-28">
      <StorySection />
      <MissionSection />
      <ValuesGrid />
      <TeamSection />
    </div>
  );
}