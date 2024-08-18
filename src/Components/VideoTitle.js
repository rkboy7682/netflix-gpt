import React from "react";

const VideoTitle = ({ title, overview }) => {
  console.log(title);

  return (
    <div className="pt-60 ml-44">
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p className="text-xl font-medium w-1/4">{overview}</p>
      <div className="mt-4 p-4">
        <button className=" boreder rounded-lg  mr-4 text-lg text-white bg-slate-600 w-28 h-14">
          Play
        </button>
        <button className=" boreder rounded-lg text-lg text-white bg-slate-600 w-28 h-14">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
