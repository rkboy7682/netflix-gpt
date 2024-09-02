import { useEffect } from "react";
import { TMDB_API_KEY } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";

const useTmdbApi = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    MOVIE_API();
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
