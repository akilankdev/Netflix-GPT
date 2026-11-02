import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store)=> store.userConfig.langValue);
  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="type"
          className="p-3 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button className="col-span-3 py-2 px-3 m-4 text-lg bg-red-700 text-white rounded-md">{lang[langKey].gptSearchText}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
