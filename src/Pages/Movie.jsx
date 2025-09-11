import React from "react";
import PageContainer from "../Components/PageContainer";
import { getMovieData } from "../utils/API";

const Movie = () => {
  return (
    <PageContainer
      title="Movie"
      apiFunc={getMovieData}
      typeOptions={["now_playing", "movie", "top_rated", "upcoming"]}
    />
  );
};

export default Movie;
