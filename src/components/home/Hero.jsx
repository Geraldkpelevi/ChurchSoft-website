import churchMembers from "../../assets/churchmembers.jpg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${churchMembers})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Multi-layer gradient overlay for better readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto text-center w-full">
          {/* Main Heading with responsive text sizing */}
          <h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-2 sm:mb-4 leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
              G.C.C.I
            </span>
          </h1>

          {/* Subheading with responsive sizing */}
          <p
            className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl text-white/80 font-light mb-4 sm:mb-6 md:mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Great Commission Church International
          </p>

          {/* Tagline with responsive sizing and padding */}
          <p
            className="text-base xs:text-sm sm:text-lg md:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-2 sm:px-0"
            style={{ animationDelay: "0.3s" }}
          >
            Empowering believers across nations through Christ-centered
            discipleship, passionate worship, and purposeful service to
            transform the world.
          </p>

          {/* CTA Buttons with responsive sizing */}
          <div
            className="flex flex-col xs:flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 animate-fade-in-up px-2 sm:px-0"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Primary Button */}
            <button className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 hover:from-yellow-500 hover:via-yellow-600 hover:to-amber-600 text-black font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-lg w-full sm:w-auto">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0L9 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" />
              </svg>
              <span>Join Live Worship</span>
            </button>

            {/* Secondary Button */}
            <button className="group relative inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg backdrop-blur-sm bg-white/5 w-full sm:w-auto">
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <span>Explore Events</span>
            </button>
          </div>

          {/* Quick Stats with responsive layout */}
          <div
            className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-10 md:mt-12 animate-fade-in-up px-2 sm:px-0"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center p-2 sm:p-3 md:p-4">
              <div className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1">
                Global
              </div>
              <p className="text-white/60 text-xs xs:text-sm md:text-base">
                Presence
              </p>
            </div>
            <div className="text-center p-2 sm:p-3 md:p-4 border-l border-r border-white/20">
              <div className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1">
                Multi
              </div>
              <p className="text-white/60 text-xs xs:text-sm md:text-base">
                Generational
              </p>
            </div>
            <div className="text-center p-2 sm:p-3 md:p-4">
              <div className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1">
                Christ
              </div>
              <p className="text-white/60 text-xs xs:text-sm md:text-base">
                Centered
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* News Ticker Section - Premium Styled with responsive padding */}
      <div className="relative z-20 w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 border-t border-white/10 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 sm:py-4">
          {/* Ticker Label */}
          <div className="flex-shrink-0 flex items-center gap-2 bg-yellow-500 text-black font-black text-xs sm:text-xs md:text-base rounded-full px-3 sm:px-4 py-2 whitespace-nowrap">
            <span className="inline-block w-2 h-2 bg-black rounded-full animate-announcement-vibrate"></span>
            {/* <span className="hidden xs:inline">ANNOUNCEMENTS</span> */}
            <span className="xs:hidden text-xs">ANNOUNCEMENTS 📢</span>
          </div>

          {/* Scrolling Content */}
          <div className="flex-1 overflow-hidden w-full sm:w-auto">
            <div className="animate-scroll-marquee whitespace-nowrap">
              <span className="inline-block text-white/90 text-xs sm:text-sm md:text-base font-medium mr-8 sm:mr-12">
                📢 Sunday Worship: 9:00 AM & 11:30 AM — Wednesday Bible Study:
                6:00 PM — Youth Fellowship: Friday 7:00 PM — Join our mission
                and outreach programs!
              </span>
              <span className="inline-block text-white/90 text-xs sm:text-sm md:text-base font-medium mr-8 sm:mr-12">
                📢 Sunday Worship: 9:00 AM & 11:30 AM — Wednesday Bible Study:
                6:00 PM — Youth Fellowship: Friday 7:00 PM — Join our mission
                and outreach programs!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Scroll Indicator */}
      <div className="relative z-10 flex justify-center pb-2 sm:pb-4 animate-bounce">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes announcement-pulse {
          0%, 100% {
            transform: translateX(0) scale(1);
          }
          10% {
            transform: translateX(-1px) scale(1.1);
          }
          20% {
            transform: translateX(1px) scale(1.2);
          }
          30% {
            transform: translateX(-1px) scale(1.1);
          }
          40% {
            transform: translateX(1px) scale(1.3);
          }
          50% {
            transform: translateX(0) scale(1.2);
          }
          60% {
            transform: translateX(-1px) scale(1.1);
          }
          70% {
            transform: translateX(1px) scale(1.2);
          }
          80% {
            transform: translateX(-1px) scale(1.1);
          }
          90% {
            transform: translateX(1px) scale(1.2);
          }
        }

        @keyframes announcement-glow-intense {
          0%, 100% {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
          }
          25% {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6);
          }
          50% {
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 0, 0, 0.4);
          }
          75% {
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.6);
          }
        }

        .animate-announcement-vibrate {
          animation: announcement-vibrate 1.5s ease-in-out infinite, announcement-glow-intense 1.5s ease-in-out infinite;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scroll-marquee {
          display: inline-flex;
          animation: scroll-marquee 30s linear infinite;
        }

        .animate-scroll-marquee:hover {
          animation-play-state: paused;
        }

        /* Mobile-first responsive breakpoints */
        @media (max-width: 320px) {
          /* Extra small phones */
          h1 {
            word-spacing: 0.05em;
          }
        }
      `}</style>
    </section>
  );
}
