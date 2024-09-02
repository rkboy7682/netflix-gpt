import React, { useEffect } from "react";
import { TMDB_API_KEY } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../../utils/movieSlice";

const useUpcoming = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    upComing();
  }, []);

  async function upComing() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      TMDB_API_KEY
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  }
  return <div></div>;
};

export default useUpcoming;
