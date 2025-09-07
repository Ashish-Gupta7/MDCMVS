import React from "react";

const SubCard = ({ elem, currentSelection }) => {
  const imagePath =
    elem.poster_path || elem.backdrop_path || elem.profile_path
      ? `https://image.tmdb.org/t/p/w500${
          elem.poster_path || elem.backdrop_path || elem.profile_path
        }`
      : "/Images/default/Image_not_available.png";

  const title = elem.title || elem.name || "Untitled";
  const date = elem.release_date || elem.first_air_date || "";

  let description = "";
  if (currentSelection === "person") {
    description =
      elem.known_for
        ?.map((k) => k.title || k.name)
        .slice(0, 3)
        .join(", ") || "No known works";
  } else {
    description = elem.overview || "No description available.";
  }

  return (
    <div className="w-48 flex flex-col gap-4 shrink-0 mb-4">
      <div
        className="w-full h-36 rounded-md bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${imagePath})` }}
      ></div>
      <div>
        <h1 className="text-base uppercase truncate">{title}</h1>
        {date && (
          <p className="text-xs text-gray-400">
            {new Date(date).getFullYear()}
          </p>
        )}
        <p className="text-sm line-clamp-3">
          {description && description.length > 100 && (
            <button className="text-blue-500 ml-1">more</button>
          )}
        </p>
      </div>
    </div>
  );
};

export default SubCard;
