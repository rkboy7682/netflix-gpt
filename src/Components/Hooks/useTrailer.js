import { useEffect } from "react";
import { TMDB_API_KEY } from "../../utils/constant";

const useTrailer = (id) => {
  console.log(id);

  useEffect(() => {
    TrailerAPI();
  }, []);

  const TrailerAPI = async (id) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/533535/videos?language=en-US",
      TMDB_API_KEY
    );
    console.log(data);

    const json = await data.json();
    console.log("jssss", json);

    const filterData = json.results.filter(
      (video) => video?.type === "Trailer"
    );
    const Trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(Trailer);
  };
};

export default useTrailer;
