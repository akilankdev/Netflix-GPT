import React from "react";

const GptInstructions = () => {
  return (
    <div>
      <div className="sm:w-1/2 bg-black bg-opacity-80 rounded-3xl text-white sm:mx-auto mx-2 mt-4 p-10">
        <h2 className="sm:text-2xl text-xl font-semibold text-red-500 mb-4">
          How to use Gemini Recommendations
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-gray-300">
          <p className="">
            <span className="font-semibold text-white">
              1. Gemini currently supports movie recommendations. It cannot
              recommend TV shows or web series.
            </span>
          </p>
          <p>
            <span className="font-semibold text-white">2. Results may vary: </span>Some recommendations might be irrelevant, and we may not
          always be able to retrieve matching movie details.
          </p>
          <p>
            <span className="font-semibold text-white">3. Be specific: </span>
            Mention genres, actors, languages, moods or similar movies
            to get better recommendations.
          </p>
        </div>
        <div className="">
          <h3 className="text-base sm:text-lg text-white mb-2">Try this example:</h3>
          <p className="text-sm sm:text-base italic bg-gray-800 p-3 rounded-lg">"Suggest realistic, feel-good dramas similar to Meiyazhalagan about self-discovery and human connection."</p>
        </div>
      </div>
    </div>
  );
};

export default GptInstructions;
