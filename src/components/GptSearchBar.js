import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import {LoaderCircle} from 'lucide-react';

const GptSearchBar = ({loading,fetchGeminiRecommendations,onSearch}) => {
  const langKey = useSelector((store)=> store.userConfig.langValue);
  const searchText = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault()
    const prompt = searchText.current.value.trim();
    //if prompt is empty "" then dont make the req.
    if(!prompt) return;
    onSearch();
    fetchGeminiRecommendations(searchText.current.value);
  }
  return (
    <div className="pt-[8%] flex justify-center">
      <form className="md:w-1/2 sm:w-3/4 mx-2 bg-black grid grid-cols-12" onSubmit={handleSubmit}>
        <input
          ref={searchText}
          type="text"
          className="p-3 sm:m-4 my-4 ml-2 col-span-8 sm:col-span-9"
          placeholder={lang[langKey].gpt.gptSearchPlaceholder}

        ></input>
        <button className="col-span-4 sm:col-span-3 py-2 sm:px-3 my-4 mx-1 sm:m-4 sm:text-lg bg-red-700 text-white rounded-md" disabled={loading} type="submit">{loading ?<span className="flex justify-between items-center">{"Generating "}<LoaderCircle size={26} className="animate-spin" /></span>: lang[langKey].gpt.gptSearchText }</button>
      </form>               
    </div>
  );
};

export default GptSearchBar;
