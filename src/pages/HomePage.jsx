import ChurchesNearby from "../components/common/ChurchesNearby";
import DailyQuote from "../components/common/DailyQuote";
import FlyerSlider from "../components/home/FlyerSlider";
import AboutSection from "../components/home/AboutSection";
import CTASection from "../components/home/CTASection";
import Hero from "../components/home/Hero";
import LeadershipPreview from "../components/home/LeadershipPreview";
import TrendingNews from "../components/home/TrendingNews";

export default function HomePage() {
  return (
    <main className="font-[DM Sans]">
      <Hero />
      <AboutSection />
      <LeadershipPreview />
      <TrendingNews />
      <FlyerSlider />
      <CTASection />
      <ChurchesNearby />
      <DailyQuote />
    </main>
  );
}
