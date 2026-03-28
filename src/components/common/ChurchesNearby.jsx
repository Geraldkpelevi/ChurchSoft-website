import {  useState } from "react";
import { Link } from "react-router-dom";
export default function ChurchesNearby() {
    
  return (
    <section className="py-16 px-6 sm:px-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Text + Search */}
        <div>
          <div className="flex items-center mb-4">
            <span className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 21c-4.418 0-8-4.03-8-9a8 8 0 0116 0c0 4.97-3.582 9-8 9z"
                />
              </svg>
            </span>
            <h2 className="text-3xl font-bold">Locate churches nearby you</h2>
          </div>
          <p className="mb-6 text-gray-300">
            As a Bible-believing church, we desire to fellowship with you and
            grow together in our understanding of God's Word. Click the link to
            find a church near you.
          </p>

          <div className="flex">
            <input
              type="text"
              placeholder="Enter your location"
              className="px-4 py-3 rounded-l-md text-gray-900 focus:outline-none w-full"
            />
           <Link to="/mapSection">
            <button  className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-400 transition">
              
              Search
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div>
          <img
            src="https://th.bing.com/th/id/R.e2b74c378694830aff42479624f9dd0c?rik=%2bIfTsUqB9vKxDw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-b_ypyiB57KM%2fTj77E__n0FI%2fAAAAAAAARo0%2fDpNLYP8c20g%2fs1600%2fChurch%252Bbuildings%252Bpictures-2.jpg&ehk=Pmj3NK7GYku5h1Fl5lGjSp0%2b%2fmC6OD8OZTQEIuYqnrE%3d&risl=&pid=ImgRaw&r=0"
            alt="Churches Nearby"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}