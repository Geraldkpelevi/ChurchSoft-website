import React from "react";
import { Link } from "react-router-dom";
export default function CTASection() {
  return (
    <section className="py-20 px-6 sm:px-12 bg-blue-50 text-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Get Involved Today
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-900 mb-8">
          Join our growing community and stay connected with church activities,
          events, and spiritual growth opportunities.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md">
            Join Now
          </button>

          <Link to="/contact">
          <button className="border border-blue-900 hover:bg-white hover:text-blue-900 text-blue-900 font-semibold px-6 py-3 rounded-md">
            Contact Us
          </button>
          </Link>
        </div>

      </div>
    </section>
  );
}