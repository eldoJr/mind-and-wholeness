import TeamSection from "../../components/sections/about/TeamSection";
import NewsletterSignup from "../../components/layout/newsletterSignup";

export default function TeamPage() {
  return (
    <div className="space-y-28">
      <TeamSection />
      <div className="w-full h-0.5 bg-green-600 " />
      <NewsletterSignup />
    </div>
  );
}