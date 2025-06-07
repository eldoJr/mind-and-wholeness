// src/pages/about/story.tsx
import { StorySection } from "../../components/sections/about/StorySection";
import { Timeline } from "../../components/sections/about/Timeline";

export default function StoryPage() {
  return (
    <div className="space-y-28">
      <StorySection expanded={true} />
      <Timeline />
    </div>
  );
}