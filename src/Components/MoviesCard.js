import React from "react";
import { IMG_CDN } from "../utils/constant";

const MoviesCard = ({ poster_path }) => {
  return (
    <div className="w-52  flex ">
      <div>
        <img alt="poster " src={IMG_CDN + poster_path} />
      </div>
    </div>
  );
};

export default MoviesCard;
