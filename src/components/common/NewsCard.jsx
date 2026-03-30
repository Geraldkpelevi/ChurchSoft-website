function NewsCard({ image, title, date, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-gray-50 text-orange-900 rounded-xl overflow-hidden group cursor-pointer">
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
          <p className="text-sm text-gray-800 mb-3">{date}</p>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold uppercase leading-snug mb-3 font-[Montserrat]">
            {title.split(" ").slice(0, 5).join(" ")}
            {title.split(" ").length > 5 && "..."}
          </h3>

          {/* Description */}
          <p className="text-gray-800 text-sm leading-relaxed">
            {description.split(" ").slice(0, 10).join(" ")}
            {description.split(" ").length > 10 && (
              <>
                ...{" "}
                <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                  View more
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </a>
  );
}

export default NewsCard;
