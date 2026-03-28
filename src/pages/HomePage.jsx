import AboutSection from "../components/home/AboutSection";
import CTASection from "../components/home/CTASection";
// import EventsPreview from "../components/home/EventsPreview";
import Hero from "../components/home/Hero";
import LeadershipPreview from "../components/home/LeadershipPreview";
import News from "../components/home/News";
import DailyQuote from "../components/common/DailyQuote";
import ChurchesNearby from "../components/common/ChurchesNearby";

export default function HomePage() {
  return (
    <main className="font-[DM Sans]">
      <Hero />
      <AboutSection />
      <LeadershipPreview />
      <News />
      {/* <EventsPreview /> */}
      <DailyQuote />
      <CTASection />
      <ChurchesNearby />
    </main>
  );
}