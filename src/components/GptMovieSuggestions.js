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
        recommendations.movieGroups.map((movieGroup, index) =>
          //If movie result exist then show those
          movieGroup.movies.length > 0 ? (
            <div className="" key={movieGroup.geminiTitle}>
              <MovieList
                title={movieGroup.geminiTitle}
                movies={movieGroup.movies}
              />{" "}
            </div>
          ) : (
            //if there is no movie results,then just show the title only
            <div className="" key={movieGroup.geminiTitle}>
              <h1 className="text-2xl py-4">{movieGroup.geminiTitle}</h1>
              <p className="text-orange-500 ">Sorry, we couldn't retrieve movie details for this recommendation.</p>
            </div>
          ),
        )}
    </div>
  );
};

export default GptMovieSuggestions;
