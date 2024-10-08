import React from "react";
import GptSearchInputBox from "./GptSearchInputBox";
import GptMoviesSuggestion from "./GptMoviesSuggestion";

const GPTSearch = () => {
  return (
    <div>
      <div className=" border-2 border-purple-900 ">
        <img
          className="absolute -z-10"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg"
          alt="background_logo"
        />
      </div>
      <div className="pt-[90px] md:pt-0">
        <GptSearchInputBox />
        <GptMoviesSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
