import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BG_IMAGE } from "../utils/constants";
import useGeminiRecommendations from "../hooks/useGeminiRecommendations";

const GptSearchPage = () => {
  const { loading, fetchGeminiRecommendations, error } =
    useGeminiRecommendations();
  return (
    <>
      <div className="fixed -z-10">
        <img src={NETFLIX_BG_IMAGE} alt="Background-image " className="sm:h-screen sm:w-screen h-screen object-cover"/>
      </div>
      <div className="pt-[35%] sm:pt-[10%] md:pt-[1%]">
        <GptSearchBar
          loading={loading}
          fetchGeminiRecommendations={fetchGeminiRecommendations}
        />
        <GptMovieSuggestions loading={loading} error={error} />
      </div>
    </>
  );
};

export default GptSearchPage;
