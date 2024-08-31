import React from "react";
import Header from "./Header";
import useTmdbApi from "./Hooks/useTmdbApi";
import MainContainer from "./MainContainer";
import SecodaryContainer from "./SecodaryContainer";
import usePopularMovieApi from "./Hooks/usePopularMovieApi";
import useToprated from "./Hooks/useToprated";
import useUpcoming from "./Hooks/useUpcoming";
const Browse = () => {
  useTmdbApi();
  usePopularMovieApi();
  useToprated();
  useUpcoming();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecodaryContainer />
    </div>
  );
};

export default Browse;
