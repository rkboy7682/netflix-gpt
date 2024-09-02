import React from "react";
import Header from "./Header";
import useTmdbApi from "./Hooks/useTmdbApi";
import MainContainer from "./MainContainer";
import SecodaryContainer from "./SecodaryContainer";
import usePopularMovieApi from "./Hooks/usePopularMovieApi";
import useToprated from "./Hooks/useToprated";
import useUpcoming from "./Hooks/useUpcoming";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  useTmdbApi();
  usePopularMovieApi();
  useToprated();
  useUpcoming();

  const showGpt = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showGpt === true ? (
        <GPTSearch />
      ) : (
        <div>
          <MainContainer />
          <SecodaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
