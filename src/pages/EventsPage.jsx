import React from "react";
import EventCard from "../components/common/EventCard";
import { churchData } from "../data/churchData";

export default function EventsPage() {
  const events = (churchData.events || []).filter(
    (event) => new Date(event.date) < new Date()
  );

  return (
    <>
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Events
        </h1>

        {events.length === 0 ? (
          <p className="text-center text-gray-500">
            No Events available.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, idx) => (
              <EventCard key={idx} {...event} />
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}