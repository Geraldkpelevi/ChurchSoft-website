import EventCard from "../components/common/EventCard";
import FlyerSlider from "../components/common/FlyerSlider";
import { churchData } from "../data/churchData";

export default function NewsPage() {
  const events = (churchData.events || []).filter(
    (event) => new Date(event.date) >= new Date(),
  );

  const flyers = churchData.flyers || [];

  return (
    <>
      <div className="py-10 bg-gray-50 ">
        <div className="w-full px-10">
          <h1 className="text-4xl font-bold mb-10 text-blue-600 text-center">
            Upcoming Events
          </h1>

          {/* SLIDER GOES HERE */}
          <FlyerSlider flyers={flyers} interval={3000} />

          <div className="border-t border-red-500">
            {events.map((event, idx) => (
              <EventCard key={idx} {...event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
