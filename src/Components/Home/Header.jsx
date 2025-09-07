import React, { useEffect, useState } from "react";
import { getTrendingData } from "../../utils/API";
import { HiCalendarDateRange } from "react-icons/hi2";
import { MdHowToVote } from "react-icons/md";

const Header = () => {
  const [trending, setTrending] = useState({});

  const getRandomTrendingData = async () => {
    const { results } = await getTrendingData();
    const data = results[Math.floor(Math.random() * results.length)];
    setTrending(data);
  };

  useEffect(() => {
    getRandomTrendingData();
  }, []);

  return (
    <div className="h-[600px] w-full relative bg-black">
      <img
        className="w-full h-full object-cover shadow-2xl"
        src={
          trending.backdrop_path || trending.profile_path
            ? `https://image.tmdb.org/t/p/original/${
                trending.backdrop_path || trending.profile_path
              }`
            : "/Images/default/Image_not_available.png"
        }
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute bottom-20 left-32 flex flex-col items-start gap-4">
        <h1 className="text-6xl font-bold">
          {trending.original_name ||
            trending.original_title ||
            trending.name ||
            trending.title}
        </h1>
        <p className="text-gray-300 pr-6">
          {trending?.overview
            ? trending.overview.length > 400
              ? trending.overview.slice(0, 400) + "..."
              : trending.overview
            : "No description available"}
          <span className="text-blue-500 font-semibold cursor-pointer">
            {" "}
            more
          </span>
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <HiCalendarDateRange className="text-yellow-400 font-extrabold" />
            <h4>
              Release Date: {trending.release_date || trending.first_air_date}
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <MdHowToVote className="text-yellow-400 font-extrabold" />
            <h4>Vote: {trending.vote_average}</h4>
          </div>
        </div>
        <button className="px-5 font-semibold cursor-pointer py-2 bg-[#6556cd]">
          Watch Trailer
        </button>
      </div>
    </div>
  );
};

export default Header;
