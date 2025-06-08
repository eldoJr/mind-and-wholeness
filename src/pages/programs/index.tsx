import DailyMeditations from "../../components/sections/programs/Meditations";
import PodcastsPage from "../../components/sections/programs/Podcasts";
import EventsPage from "../../components/sections/programs/Events";

export default function ProgramsPage() {
  return (
    <div className="space-y-28">
      <DailyMeditations />
      <PodcastsPage />
      <EventsPage />
    </div>
  );
}