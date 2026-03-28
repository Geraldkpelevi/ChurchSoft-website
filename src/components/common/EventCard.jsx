import React from "react";

export default function EventCard({ title, date, time, description, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {date} | {time}
        </p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
}