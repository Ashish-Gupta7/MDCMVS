import React, { useEffect, useState } from "react";
import SearchBar from "../Components/Home/SearchBar";
import {
  CustomSelect,
  DurationSelect,
} from "../Components/MicroComponent.jsx/CustomSelect";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const PageContainer = ({
  title,
  apiFunc,
  typeOptions = [],
  durationOptions = [],
}) => {
  const navigate = useNavigate();
  const [saveData, setSaveData] = useState([]);
  const [select, setSelect] = useState(typeOptions[0] || "");
  const [duration, setDuration] = useState(durationOptions[0] || "");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const getData = async (pageNum = 1) => {
    let data;

    if (apiFunc.name === "getTrendingData") {
      data = await apiFunc(select, duration, pageNum);
    } else {
      data = await apiFunc(select, pageNum);
    }

    const { results, total_pages } = data;

    if (pageNum === 1) {
      setSaveData(results);
    } else {
      setSaveData((prev) => [...prev, ...results]);
    }

    setHasMore(pageNum < total_pages);
  };

  const fetchMoreData = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    getData(nextPage);
  };

  const selectedDuration = (val) => {
    setDuration(val);
    setPage(1);
  };

  const selectedType = (val) => {
    setSelect(val);
    setPage(1);
  };

  useEffect(() => {
    getData(1);
  }, [select, duration]);

  // Back to top button show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="px-8 relative">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h2 onClick={() => navigate("/")} className="text-xl cursor-pointer">
            🔙 {title}
          </h2>
          <SearchBar />
        </div>
        <div className="flex gap-8">
          {typeOptions.length > 0 && (
            <CustomSelect options={typeOptions} selectedType={selectedType} />
          )}
          {durationOptions.length > 0 && (
            <DurationSelect
              options={durationOptions}
              selectedDuration={selectedDuration}
            />
          )}
        </div>
      </nav>

      <InfiniteScroll
        dataLength={saveData.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4 className="text-center py-4">Loading...</h4>}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-4">
          {saveData.map((elem, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <img
                className="w-52"
                src={
                  elem.poster_path || elem.backdrop_path || elem.profile_path
                    ? `https://image.tmdb.org/t/p/w500${
                        elem.poster_path ||
                        elem.backdrop_path ||
                        elem.profile_path
                      }`
                    : "/Images/default/Image_not_available.png"
                }
                alt=""
              />
              <div className="title">
                {elem.title || elem.name || "Untitled"}
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-all"
        >
          ⬆️ Top
        </button>
      )}
    </div>
  );
};

export default PageContainer;
