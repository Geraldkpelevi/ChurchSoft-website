import React, { useState } from "react";
import EventCard from "../components/common/EventCard";
import { churchData } from "../data/churchData";

export default function EventsPage() {
  const events = churchData.events || [
    {
      title: "Sunday Worship Service",
      date: "june 30, 2026",
      time: "9:00 AM & 11:30 AM",
      description: "Raising disciples for all nations.",
      image: "/images/sunday-service.jpg",
    },
    {
      title: "Wednesday Bible Study",
      date: "April 2, 2026",
      time: "6:00 PM",
      description: "Deep dive into the Word of God.",
      image: "/images/wednesday-bible-study.jpg",
    },
    {
      title: "Youth Fellowship",
      date: "April 5, 2026",
      time: "5:00 PM",
      description: "Engaging young people in worship and discipleship.",
      image: "/images/youth-fellowship.jpg",
    },
    // add more events here
  ];

  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentEvents = events.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">All Events</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentEvents.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}

        {/* Back to top */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to top
          </button>
        </div>
      </div>
    </div>
  );
}