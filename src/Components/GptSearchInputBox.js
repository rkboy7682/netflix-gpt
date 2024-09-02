import React from "react";
import { useSelector } from "react-redux";
import { language } from "../utils/language";

const GptSearchInputBox = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log("language", [langKey]);

  return (
    <div className=" pt-[16%]       h-[900px] ">
      <div>
        <form className="flex w-1/2 bg-black ml-80 h-14">
          <input
            className=" w-7/12  border-red-700 text-center"
            type="text"
            placeholder={language[langKey].placeholder}
          />
          <div>
            <button className=" h-14  w-80 bg-red-500 text-white">
              {/* here we make dynamic by useing [langKey] */}
              {language[langKey].search}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GptSearchInputBox;
