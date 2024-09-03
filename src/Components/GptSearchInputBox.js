import React, { useState } from "react";
import { useSelector } from "react-redux";
import { language } from "../utils/language";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMNI_API_KEY } from "../utils/constant";
const genAI = new GoogleGenerativeAI(GEMNI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const GptSearchInputBox = () => {
  const langKey = useSelector((store) => store.config.lang);
  // console.log("language", [langKey]);
  const [search, setSearch] = useState("");
  // const [loading, setLoading] = useState(false);
  const [aiResponse, setResponse] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  async function aiRun() {
    // setLoading(true);
    // const prompt = `random movies ${search}`;
    const data = await model.generateContent(`${search}`);
    const response = await data.response;

    const text = response.text();

    setResponse(text);
    // setLoading(false);
  }

  // button event trigger to consume gemini Api
  const handleClick = () => {
    aiRun();
  };

  return (
    <div className=" pt-[16%] h-[900px] ">
      <div>
        <form
          className="flex w-1/2 bg-black ml-80 h-14"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className=" w-7/12  border-red-700 text-center"
            type="text"
            placeholder={language[langKey].placeholder}
            onChange={(e) => handleChangeSearch(e)}
          />
          <div>
            <button
              className=" h-14  w-80 bg-red-500 text-white"
              onClick={() => handleClick()}
            >
              {/* here we make dynamic by useing [langKey] */}
              {language[langKey].search}
            </button>
          </div>

          {/* {loading === true && search !== "" ? (
            <p>Loading ...</p>
          ) : (
            <p className="text-white border-2 border-white bg-slate-800 h-96">
              {aiResponse}
            </p>
          )} */}
        </form>
        <div className="w-6/12 ml-[320px] mt-4">
          <p className="text-white border-2  bg-slate-600 h-auto overflow-y-auto">
            {aiResponse}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GptSearchInputBox;
