import { useEffect } from "react";
import { TMDB_API_KEY } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";

const useTmdbApi = () => {
  const dispatch = useDispatch();

  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  useEffect(() => {
    if (!movies) MOVIE_API();
  }, []);

  async function MOVIE_API() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      TMDB_API_KEY
    );

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }
};
export default useTmdbApi;
