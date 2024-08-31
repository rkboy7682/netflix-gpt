import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ Title, movies }) => {
  console.log("from list ", movies);
  if (movies !== null) {
    return (
      <div className="px-6 text-white ">
        <h1 className="text-xl font-bold py-3">{Title}</h1>

        <div className="overflow-x-scroll flex  ">
          <div className="flex ">
            {movies !== undefined
              ? movies.map((movie) => (
                  <MoviesCard
                    key={movie?.id}
                    poster_path={movie?.poster_path}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
};

export default MoviesList;
