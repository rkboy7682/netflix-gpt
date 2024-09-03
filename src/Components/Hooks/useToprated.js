import React, { useEffect } from "react";
import { TMDB_API_KEY } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopratedMovies } from "../../utils/movieSlice";

const useToprated = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((store) => store.movies.topRatedMovies);

  useEffect(() => {
    !topRated && topRatedMovies();
  }, []);

  async function topRatedMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      TMDB_API_KEY
    );
    const json = await data.json();
    dispatch(addTopratedMovies(json?.results));
  }

  return <div></div>;
};

export default useToprated;
