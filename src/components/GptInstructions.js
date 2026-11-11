import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptInstructions = () => {
  const langKey = useSelector((store) => store.userConfig.langValue);
  return (
    <div>
      <div className="sm:w-1/2 bg-black bg-opacity-80 rounded-3xl text-white sm:mx-auto mx-2 mt-4 p-10">
        <h2 className="sm:text-2xl text-xl font-semibold text-red-500 mb-4">
          {lang[langKey].gpt.instructions.title}
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-gray-300">
          <p className="">
            <span className="font-semibold text-white">
              1. {lang[langKey].gpt.instructions.msgOne}
            </span>
          </p>
          <p>
            <span className="font-semibold text-white">2. {lang[langKey].gpt.instructions.msgTwoTitle} </span>
            {lang[langKey].gpt.instructions.msgTwoContent}
          </p>
          <p>
            <span className="font-semibold text-white">3. {lang[langKey].gpt.instructions.msgThreeTitle} </span>
            {lang[langKey].gpt.instructions.msgTwoContent}
          </p>
        </div>
        <div className="">
          <h3 className="text-base sm:text-lg text-white mb-2">{lang[langKey].gpt.instructions.exampleTitle}</h3>
          <p className="text-sm sm:text-base italic bg-gray-800 p-3 rounded-lg">"{lang[langKey].gpt.instructions.exampleContent}"</p>
        </div>
      </div>
    </div>
  );
};

export default GptInstructions;
