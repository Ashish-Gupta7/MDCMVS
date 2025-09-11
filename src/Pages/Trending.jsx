import React from "react";
import PageContainer from "../Components/PageContainer";
import { getTrendingData } from "../utils/API";

const Trending = () => {
  return (
    <PageContainer
      title="Trending"
      apiFunc={getTrendingData}
      typeOptions={["all", "movie", "tv", "person"]}
      durationOptions={["day", "week"]}
    />
  );
};

export default Trending;
