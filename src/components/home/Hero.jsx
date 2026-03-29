import churchMembers from "../../assets/images/churchmembers.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full text-center text-white"
      style={{
        backgroundImage: `url(${churchMembers})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay (important for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 py-30 flex flex-col items-center justify-center gap-8">
        {/* Hero Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight ">
            Welcome to G.C.C.I
          </h1>
          <p className="text-xs text-gray-300">
            ( Great Commission Church International )
          </p>
        </div>

        <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-2xl">
          Connecting members, empowering leadership, and managing church
          activities with ease.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-5 justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md">
            Join Live
          </button>

          <button className="border border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-md">
            Learn More
          </button>
        </div>

        {/* News Ticker */}
      </div>
      <div className="w-full overflow-hidden mb-2 pb-2">
        <div className="animate-marquee whitespace-nowrap">
          <p className="inline-block text-lg text-amber-300 ">
            📢 Sunday Worship: 9:00 AM & 11:30 AM — Wednesday Bible Study: 6:00
            PM — Join our Youth Fellowship every Friday at 7:00 PM — Be part of
            our mission and outreach programs!
          </p>
          
        </div>
      </div>
      {/* Tailwind CSS animation */}
      <style jsx>{`
        @keyframes marquee {
         100% {
            transform: translateX(-100vw);
          }
          0% {
            transform: translateX(100vw);
          }
          20% {
            transform: translateX(50vw);
          }
          50% {
            transform: translateX(0vw);
          }
          70% {
            transform: translateX(-50vw);
          }
          100% {
            transform: translateX(-100vw);
          }
        }
        .animate-marquee {
          display: inline-block;

          animation: marquee 50s linear infinite;
        }
      `}</style>
    </section>
  );
}
