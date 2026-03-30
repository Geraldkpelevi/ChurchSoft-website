import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      
      {/* Big 404 */}
      <h1 className="text-7xl font-bold text-blue-700 mb-4">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Page not found
      </h2>

      {/* Description */}
      <p className="text-gray-600 mb-6 max-w-md">
        The page you are looking for might have been removed,
        had its name changed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}