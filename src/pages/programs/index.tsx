import DailyMeditations from "../../components/sections/programs/meditations/Meditations";
import PodcastsPage from "../../components/sections/programs/podcasts/Podcasts";
import EventsPage from "../../components/sections/programs/events/Events";

export default function ProgramsPage() {
  return (
    <div className="space-y-28">
      <DailyMeditations />
      <PodcastsPage />
      <EventsPage />
    </div>
  );
}