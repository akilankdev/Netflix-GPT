import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BG_IMAGE } from "../utils/constants";
import useGeminiRecommendations from "../hooks/useGeminiRecommendations";
import GptInstructions from "./GptInstructions";
import { useState } from "react";

const GptSearchPage = () => {
  const { loading, fetchGeminiRecommendations, error } =
    useGeminiRecommendations();
  const [showInstructions,setShowInstructions] = useState(true);
  return (
    <>
      <div className="fixed -z-10">
        <img src={NETFLIX_BG_IMAGE} alt="Background-image " className="sm:h-screen sm:w-screen h-screen object-cover"/>
      </div>
      <div className="pt-[35%] sm:pt-[10%] md:pt-[1%]">
        <GptSearchBar
          loading={loading}
          fetchGeminiRecommendations={fetchGeminiRecommendations}
          onSearch={() => setShowInstructions(false)}
        />
        {showInstructions && <GptInstructions />}
        <GptMovieSuggestions loading={loading} error={error} />
      </div>
    </>
  );
};

export default GptSearchPage;
