// src/pages/about/team.tsx
import { TeamSection } from "../../components/sections/about/TeamSection";

export default function TeamPage() {
  return (
    <div className="space-y-28">
      <TeamSection expanded={true} />
    </div>
  );
}