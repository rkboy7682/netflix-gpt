import React, { useEffect } from "react";
import { TMDB_API_KEY } from "../../utils/constant";
import { addPopularMovies } from "../../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const usePopularMovieApi = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  useEffect(() => {
    if (!popularMovies) PopularMovies();
  }, []);

  async function PopularMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      TMDB_API_KEY
    );
    const json = await data.json();
    console.log(json);

    dispatch(addPopularMovies(json?.results));
  }

  return <div></div>;
};

export default usePopularMovieApi;
