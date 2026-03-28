import React from "react";

function NewsCard({ image, title, date, description }) {
  return (
    <div className="bg-gray-50 text-orange-900 rounded-xl overflow-hidden group">
      
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Date */}
        <p className="text-sm text-gray-800 mb-3">
          {date}
        </p>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold uppercase leading-snug mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-800 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;