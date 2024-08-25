import React from "react";
import useTrailer from "./Hooks/useTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  const Movietrailer = useSelector((store) => store.movies?.addTrailer);
  useTrailer(id);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          Movietrailer?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
