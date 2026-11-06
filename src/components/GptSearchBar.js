import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import useGeminiRecommendations from "../hooks/useGeminiRecommendations";

const GptSearchBar = () => {
  const langKey = useSelector((store)=> store.userConfig.langValue);
  const fetchGeminiRecommendations = useGeminiRecommendations();
  const searchText = useRef(null);
  const handleClick = () => {
    fetchGeminiRecommendations(searchText.current.value);
  }

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-3 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}

        ></input>
        <button className="col-span-3 py-2 px-3 m-4 text-lg bg-red-700 text-white rounded-md" onClick={handleClick}>{lang[langKey].gptSearchText}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
