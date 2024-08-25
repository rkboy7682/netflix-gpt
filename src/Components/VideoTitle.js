import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <div className="ml-44">
        <h1 className="text-3xl font-extrabold text-white ">{title}</h1>
        <p className="text-xl font-medium w-1/4 text-white">{overview}</p>
        <div className="mt-4 p-4">
          <button className=" boreder rounded-lg  mr-4 text-lg text-white bg-slate-600 w-28 h-14">
            Play
          </button>
          <button className=" boreder rounded-lg text-lg text-white bg-slate-600 w-28 h-14">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
