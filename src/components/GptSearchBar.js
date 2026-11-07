import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import {LoaderCircle} from 'lucide-react';

const GptSearchBar = ({loading,fetchGeminiRecommendations}) => {
  const langKey = useSelector((store)=> store.userConfig.langValue);
  const searchText = useRef(null);
  const handleClick = () => {
    const prompt = searchText.current.value.trim();
    //if prompt is empty "" then dont make the req.
    if(!prompt) return;
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
        <button className="col-span-3 py-2 px-3 m-4 text-lg bg-red-700 text-white rounded-md" disabled={loading} onClick={handleClick}>{loading ?<span className="flex justify-between items-center">{"Generating "}<LoaderCircle size={26} className="animate-spin" /></span>: lang[langKey].gptSearchText }</button>
      </form>               
    </div>
  );
};

export default GptSearchBar;
