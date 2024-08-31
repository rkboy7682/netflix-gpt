import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecodaryContainer = () => {
  const nowplaying = useSelector((store) => store.movies);

  if (nowplaying !== null) {
    return (
      <div className=" bg-black">
        <div className="-mt-64 relative z-20">
          <MoviesList
            Title="NOW_PLAYING"
            movies={nowplaying?.nowPlayingMovies}
          />
          <MoviesList Title="Popular" movies={nowplaying?.popularMovies} />
          <MoviesList Title="Toprated" movies={nowplaying?.topratedMovies} />
          <MoviesList Title="Upcoming" movies={nowplaying?.upComingMovies} />
        </div>
      </div>
    );
  }
};

export default SecodaryContainer;
