import TeamSection from "../../components/sections/about/TeamSection";
import { SubscribeForm } from "../../components/ui";

export default function TeamPage() {
  return (
    <div className="space-y-28">
      <TeamSection />
      <SubscribeForm />
    </div>
  );
}