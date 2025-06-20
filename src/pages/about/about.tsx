import AboutSection from "../../components/sections/about/About";
import NewsletterSignup from "../../components/layout/newsletterSignup";

const AboutPage = () => {
  return (
    <div className="space-y-28">
      <AboutSection />
      <div className="w-full h-0.5 bg-green-600 " />
      <NewsletterSignup />
    </div>
  );
};

export default AboutPage;
