import React from "react";
import useTrailer from "./Hooks/useTrailer";

const VideoBackground = ({ id }) => {
  //   console.log("id ", id);
  const Trailer = useTrailer();
  console.log(Trailer);

  return <div>VideoBackground</div>;
};

export default VideoBackground;
