import React from "react";
import PageContainer from "../Components/PageContainer";
import { getTvData } from "../utils/API";

const TvSeries = () => {
  return (
    <PageContainer
      title="Tv Series"
      apiFunc={getTvData}
      typeOptions={["airing_today", "on_the_air", "popular", "top_rated"]}
    />
  );
};

export default TvSeries;
