import React, { useEffect } from "react";
import { TMDB_API_KEY } from "../../utils/constant";
import { addPopularMovies } from "../../utils/movieSlice";
import { useDispatch } from "react-redux";

const usePopularMovieApi = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    PopularMovies();
  }, []);

  async function PopularMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      TMDB_API_KEY
    );
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
  }

  return <div></div>;
};

export default usePopularMovieApi;
