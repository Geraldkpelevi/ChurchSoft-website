import ChurchesNearby from "../components/common/ChurchesNearby";
import DailyQuote from "../components/common/DailyQuote";
import AboutSection from "../components/home/AboutSection";
import CTASection from "../components/home/CTASection";
import Hero from "../components/home/Hero";
import LeadershipPreview from "../components/home/LeadershipPreview";
import TrendingNews from "../components/home/TrendingNews";
import UpcomingEvents from "./NewsPage";

export default function HomePage() {
  return (
    <main className="font-[DM Sans]">
      <Hero />
      <AboutSection />
      <LeadershipPreview />
      <TrendingNews />
      <UpcomingEvents />
      <CTASection />
      <ChurchesNearby />
      <DailyQuote />
    </main>
  );
}
