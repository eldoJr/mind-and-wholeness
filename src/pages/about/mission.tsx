// src/pages/about/mission.tsx
import { MissionSection } from "../../components/sections/about/MissionSection";
import { ValuesGrid } from "../../components/sections/about/ValuesGrid";

export default function MissionPage() {
  return (
    <div className="space-y-28">
      <MissionSection expanded={true} />
      <ValuesGrid />
    </div>
  );
}