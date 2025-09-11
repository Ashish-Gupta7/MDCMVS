import React from "react";
import PageContainer from "../Components/PageContainer";
import { getPopularData } from "../utils/API";

const Popular = () => {
  return (
    <PageContainer
      title="Popular"
      apiFunc={getPopularData}
      typeOptions={["person", "movie", "tv"]}
    />
  );
};

export default Popular;
