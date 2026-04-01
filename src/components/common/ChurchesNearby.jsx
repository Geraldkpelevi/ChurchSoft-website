import { useState } from "react";
import { Link } from "react-router-dom";

export default function ChurchesNearby() {
  const [location, setLocation] = useState("");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 text-white py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1496146950528-777f4d9018d7?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-blue-950/60 to-slate-900/80"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side: Text + Search */}
        <div className="space-y-5 sm:space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-700/50 rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              Find a GCCI Church Near You
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-xl leading-relaxed">
            We are a Bible-believing family and we’re excited to walk alongside
            you in faith. Enter a city or postal code below and discover nearby
            church communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 md:gap-3 items-stretch">
            <label className="sr-only" htmlFor="location-search">
              Search location
            </label>
            <input
              id="location-search"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Type your city, zip code or area"
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-white/20 bg-white/90 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition"
            />

            <Link to="/mapSection" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-300 to-yellow-400 text-slate-900 font-semibold transition hover:scale-[1.02] hover:shadow-xl"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V9"
                  />
                </svg>
                Search
              </button>
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-blue-100/90 italic">
            Try: Accra, Kumasi, Ho, Tamale, or enter your location.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://th.bing.com/th/id/R.e2b74c378694830aff42479624f9dd0c?rik=%2bIfTsUqB9vKxDw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-b_ypyiB57KM%2fTj77E__n0FI%2fAAAAAAAARo0%2fDpNLYP8c20g%2fs1600%2fChurch%252Bbuildings%252Bpictures-2.jpg&ehk=Pmj3NK7GYku5h1Fl5lGjSp0%2b%2fmC6OD8OZTQEIuYqnrE%3d&risl=&pid=ImgRaw&r=0"
            alt="Churches Nearby"
            className="w-full h-72 sm:h-80 md:h-96 lg:h-[26rem] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/15">
            <p className="text-xs sm:text-sm text-white/90">
              Seamlessly view all nearby congregations on the interactive map
              page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
