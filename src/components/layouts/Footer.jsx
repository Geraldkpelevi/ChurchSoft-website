import React from "react";
import { churchData } from "../../data/churchData";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
          {/* Logo & Description */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-bold text-white">G.C.C.I</h1>
            <p className="text-gray-400 max-w-sm">
              {churchData.mission} <br />
              {churchData.coreBusiness}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h2 className="font-semibold text-white mb-2">Quick Links</h2>
              <ul className="space-y-1 text-gray-400">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/leadership" className="hover:text-white">Leadership</a></li>
                <li><a href="/events" className="hover:text-white">Events</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-white mb-2">Contact</h2>
              <ul className="space-y-1 text-gray-400">
                <li>{churchData.contact.headquarters}</li>
                <li>{churchData.contact.phone.join(" / ")}</li>
                <li>{churchData.contact.email}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} FontTech_Soltions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}