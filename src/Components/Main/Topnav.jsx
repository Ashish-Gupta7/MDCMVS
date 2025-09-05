import React, { useEffect, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "../../utils/Axios";

const Topnav = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);

  const getSearchedResult = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${searchInput}`);
      setSearchedResults(data.results);
      console.log(searchedResults);
    } catch (error) {
      console.log("Error During Search Request:", error);
    }
  };

  useEffect(() => {
    getSearchedResult();
  }, [searchInput]);

  return (
    <div className="p-5">
      <div className="relative w-max flex items-center gap-6 text-xl ml-40">
        <IoSearch />
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className="outline-none text-lg w-[420px] border px-4 py-3 rounded-md"
          type="search"
          name=""
          id=""
          placeholder="search here..."
        />
        {searchInput && (
          <IoClose
            className="cursor-pointer"
            onClick={() => setSearchInput("")}
          />
        )}
        <div className="searchedSuggestion absolute top-full mt-4 w-[150%] max-h-96 overflow-y-scroll">
          {searchedResults.map((elem, idx) => {
            return (
              <Link
                key={idx}
                className="inline-block w-full p-5 border-b bg-zinc-600"
              >
                <div className="flex items-center gap-10">
                  <img
                    className="w-52 h-32 object-cover shadow-2xl"
                    src={
                      elem.backdrop_path || elem.profile_path
                        ? `https://image.tmdb.org/t/p/original/${
                            elem.backdrop_path || elem.profile_path
                          }`
                        : "/Images/default/Image_not_available.png"
                    }
                    alt=""
                  />
                  <span>
                    {elem.original_name ||
                      elem.original_title ||
                      elem.name ||
                      elem.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Topnav;
