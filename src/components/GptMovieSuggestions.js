import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const recommendations = useSelector((store) => store.gpt?.recommendations);
  return (
    <div className="bg-black bg-opacity-80 text-white mx-20 p-10">
      {recommendations && (
        <h2 className="text-4xl text-red-600">Gemini Recommendations</h2>
      )}
      {recommendations &&
        recommendations.movieGroups.map((movieGroup, index) => (
          <div className="" key={movieGroup.geminiTitle}>
            <MovieList
              title={movieGroup.geminiTitle}
              movies={movieGroup.movies}
            />{" "}
          </div>
        ))}
    </div>
  );
};

export default GptMovieSuggestions;
