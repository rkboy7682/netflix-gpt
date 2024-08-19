import React from "react";
import useTrailer from "./Hooks/useTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  const Movietrailer = useSelector((store) => store.movies.t);
  useTrailer(id);
  console.log(id);

  console.log("Movies", Movietrailer);

  return (
    <div>
      VideoBackground
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + Movietrailer?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
