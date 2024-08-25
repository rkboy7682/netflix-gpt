import { useEffect } from "react";
import { TMDB_API_KEY } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../../utils/movieSlice";

const useTrailer = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    TrailerAPI();
  }, []);

  const TrailerAPI = async () => {
    if (id !== undefined) {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
        TMDB_API_KEY
      );
      const json = await data.json();
      const filterData = json?.results.filter(
        (video) => video?.type === "Trailer"
      );
      const Trailer = filterData.length ? filterData[0] : json?.results[0];
      dispatch(addMovieTrailer(Trailer));
    } else {
      return console.log({ id }, "did not found");
    }
  };
};

export default useTrailer;
