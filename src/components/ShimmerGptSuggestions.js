import React from "react";

const ShimmerGptSuggestions = () => {
  const BG_COLOR = "bg-gray-700 rounded-3xl";
  return (
    <div className={`bg-black bg-opacity-90 rounded-3xl text-white mx-2 sm:mx-20 p-10 mt-4`}>
      <p className={`text-4xl ${BG_COLOR} sm:w-2/5 w-3/5 sm:h-7 h-4 animate-pulse`}></p>
      <MovieCardShimmer BG_COLOR={BG_COLOR}/>
      <MovieCardShimmer BG_COLOR={BG_COLOR}/>
      <MovieCardShimmer BG_COLOR={BG_COLOR}/>      
    </div>
  );
};

const MovieCardShimmer = ({BG_COLOR}) => {
  return (
    <div className="movie-list p-1 text-white animate-pulse">
        <p className={`text-2xl ${BG_COLOR} my-3 sm:w-1/5 w-2/5 h-3 sm:h-7 `}></p>

        <div className="overflow-x-scroll hide-scrollbar">
          <div className="flex gap-6">
            <div className={`movie-card sm:w-36 sm:h-56 w-24 h-40 shrink-0 ${BG_COLOR}`}></div>
            <div className={`movie-card sm:w-36 sm:h-56 w-24 h-40 shrink-0 ${BG_COLOR}`}></div>
          </div>
        </div>
        </div>
  );
}

export default ShimmerGptSuggestions;
