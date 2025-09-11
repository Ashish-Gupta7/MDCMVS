import axios from "../utils/Axios";

export const getSearchedResult = async (searchInput) => {
  try {
    const { data } = await axios.get(`/search/multi?query=${searchInput}`);
    return data;
  } catch (error) {
    console.log("Error During getSearchedResult:", error);
  }
};

export const getTrendingData = async (
  type = "all",
  duration = "day",
  pageNum = 1
) => {
  try {
    const { data } = await axios.get(
      `/trending/${type}/${duration}?page=${pageNum}`
    );
    return data;
  } catch (error) {
    console.log("Error During getTrendingData:", error);
  }
};

export const getPopularData = async (type = "person", pageNum = 1) => {
  try {
    const { data } = await axios.get(`/${type}/popular?page=${pageNum}`);
    return data;
  } catch (error) {
    console.log("Error During getPopularData:", error);
  }
};

export const getMovieData = async (type = "now_playing", pageNum = 1) => {
  try {
    const { data } = await axios.get(`/movie/${type}?page=${pageNum}`);
    return data;
  } catch (error) {
    console.log("Error During getPopularData:", error);
  }
};

export const getTvData = async (type = "airing_today", pageNum = 1) => {
  try {
    const { data } = await axios.get(`/tv/${type}?page=${pageNum}`);
    return data;
  } catch (error) {
    console.log("Error During getPopularData:", error);
  }
};

export const getPersonData = async (type = "popular", pageNum = 1) => {
  try {
    const { data } = await axios.get(`/person/${type}?page=${pageNum}`);
    return data;
  } catch (error) {
    console.log("Error During getPopularData:", error);
  }
};
