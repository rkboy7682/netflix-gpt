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
    <div className=" pt-[16%] md:h-[900px]">
      <div>
        <div className=" m-2 pl-16 md:m-0 md:pl-0 -mt-6 md:-mt-0">
          <form
            className="flex md:w-1/2 md:ml-80  h-14 w-40  "
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className=" md:w-7/12 w-40  text-sm  mr-6 md:mr-0 text-center rounded-md"
              type="text"
              placeholder={language[langKey].placeholder}
              onChange={(e) => handleChangeSearch(e)}
            />
            <div>
              <button
                className=" h-14 md:w-80 w-20 bg-red-500 text-white rounded-md"
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
        </div>

        <div className="md:w-6/12 md:ml-[320px] md:mt-4  pl-2 -ml-1  md:pl-0 ">
          <p className="text-white bg-slate-600 h-auto overflow-y-auto ">
            {aiResponse}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GptSearchInputBox;
