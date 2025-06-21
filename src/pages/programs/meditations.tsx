// src/pages/about/team.tsx
import DailyMeditations from "../../components/sections/programs/meditations/Meditations";
import SearchMeditation from "../../components/sections/programs/meditations/SearchMeditation";

export default function TeamPage() {
  return (
    <div className="space-y-28">
      <DailyMeditations />
      <SearchMeditation />
    </div>
  );
}