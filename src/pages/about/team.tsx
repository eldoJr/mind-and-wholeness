import TeamSection from "../../components/sections/about/TeamSection";
import NewsletterSignup from "../../components/layout/newsletterSignup";

export default function TeamPage() {
  return (
    <div className="space-y-28">
      <TeamSection />
      <NewsletterSignup />
    </div>
  );
}