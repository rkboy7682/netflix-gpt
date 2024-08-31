import React, { useEffect } from "react";
import { TMDB_API_KEY } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addTopratedMovies } from "../../utils/movieSlice";

const useToprated = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    topRatedMovies();
  }, []);

  async function topRatedMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      TMDB_API_KEY
    );
    const json = await data.json();
    console.log("topratyed", json.results);
    dispatch(addTopratedMovies(json?.results));
  }

  return <div></div>;
};

export default useToprated;
