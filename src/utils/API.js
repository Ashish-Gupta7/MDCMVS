import axios from "../utils/Axios";

export const getSearchedResult = async (searchInput) => {
  try {
    const { data } = await axios.get(`/search/multi?query=${searchInput}`);
    return data;
  } catch (error) {
    console.log("Error During getSearchedResult:", error);
  }
};

export const getTrendingData = async (type = "all") => {
  try {
    const { data } = await axios.get(`/trending/${type}/day`);
    return data;
  } catch (error) {
    console.log("Error During getTrendingData:", data);
  }
};
