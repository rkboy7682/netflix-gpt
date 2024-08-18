import { useEffect } from "react";
import { TMDB_API_KEY } from "../../utils/constant";

const useTrailer = () => {
  useEffect(() => {
    TrailerAPI();
  }, []);

  const TrailerAPI = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/533535/videos?language=en-US",
      TMDB_API_KEY
    );
    const json = await data.json();
    const filterData = json?.results.filter(
      (video) => video?.type === "Trailer"
    );
    const Trailer = filterData.length ? filterData[0] : json.results[0];
  };
};

export default useTrailer;
