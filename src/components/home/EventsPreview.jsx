import React from "react";
import EventCard from "../../components/common/EventCard";
import { churchData } from "../../data/churchData";

export default function EventsPreview() {
 const events =
  churchData.events && churchData.events.length > 0
    ? churchData.events
    : [
        {
          title: "Sunday Worship Service",
          date: "2026-03-30",
          time: "9:00 AM & 11:30 AM",
          description: "Raising disciples for all nations.",
          image: "/images/sunday-service.jpg",
        },
        {
          title: "Wednesday Bible Study",
          date: "2026-04-02",
          time: "6:00 PM",
          description: "Deep dive into the Word of God.",
          image: "/images/wednesday-bible-study.jpg",
        },
      ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}