import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ShimmerGptSuggestions from "./ShimmerGptSuggestions";
const GptMovieSuggestions = ({ loading, error }) => {
  const recommendations = useSelector((store) => store.gpt?.recommendations);
  //shows shimmer if loading is true
  if (loading) {
    return <ShimmerGptSuggestions />;
  }
  //if 'error' got any string then run this,otherwise it will have 'null' only
  if (error) {
    return (
      <div className="bg-black bg-opacity-90 rounded-3xl text-white mx-20 mt-4 p-10">
        <h2 className="text-3xl text-red-500 mb-4 animate-bounce">Something went wrong!</h2>

        <p className="text-lg">{error}</p>
      </div>
    );
  }
  //otherwise render this element below
  return (
    <>
      {recommendations && (
        <div className="bg-black bg-opacity-90 rounded-3xl text-white sm:mx-20 mx-3 p-3 sm:p-10 mt-4  sm:w-auto">
          <h2 className="sm:text-4xl text-2xl  text-red-600">Gemini Recommendations</h2>

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
                  <p className="text-orange-500 ">
                    Sorry, we couldn't retrieve movie details for this
                    recommendation.
                  </p>
                </div>
              ),
            )}
        </div>
      )}
    </>
  );
};

export default GptMovieSuggestions;
