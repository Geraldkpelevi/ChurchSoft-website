export default function HeroCards() {
  const cards = [
    {
      title: "Sunday Worship",
      time: "9:00 AM & 11:30 AM",
      description: "Raising disciples for all nations.",
    },
    {
      title: "Wednesday Bible Study",
      time: "6:00 PM",
      description: "Deep dive into Scripture with discussion and prayer",
    },
    {
      title: "Youth Fellowship",
      time: "Fridays @ 6:30 PM",
      description: "Games, worship, and teaching for students grades 6-12",
    },
    {
      title: "Join Us Live",
      description: "Be part of a growing family.",
    },
  ];

  return (
    <div className="absolute bottom-[-90px] left-0 w-full flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-blue-50 border-b-blue-600 border border-transparent backdrop-blur-md rounded-xl shadow-md p-4 hover:scale-105 transition"
          >
            <h3 className="text-base sm:text-lg text-black font-semibold mb-1">
              {card.title}
            </h3>
            {card.time && (
              <p className="text-sm sm:text-md text-blue-500 mb-1">{card.time}</p>
            )}
            <p className="text-xs sm:text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}