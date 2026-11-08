import React from "react";
import Header from "./Header";

const ShimmerBrowsePage = () => {
  return (
    <div className="bg-black">
      <Header showOtherHeaderElements={true} />
      {/* MAIN CONTAINER */}
      <div className="overflow-hidden sm:h-screen relative bg-black">
        {/* VIDEO TITLE */}
        <div className="pt-40 sm:pt-60 sm:px-10 pl-3 absolute to-transparent w-screen aspect-video">
          <div className="pl-4 animate-pulse">
            <p className=" py-2 bg-gray-700 rounded-3xl w-1/4 h-14 max-sm:h-6"></p>
            <p className="mt-4 bg-gray-700 rounded-3xl w-1/2 h-8 max-sm:h-4"></p>
            <p className="mt-4 bg-gray-700 rounded-3xl w-1/2 h-8 max-sm:h-4"></p>
            <p className="mt-4 bg-gray-700 rounded-3xl w-1/2 h-8 max-sm:h-4"></p>
            <div className="flex items-center mt-4">
              <div className="bg-gray-500/60 px-2 py-1 sm:py-3 sm:px-8 rounded-3xl h-8 w-24 mr-5 max-sm:w-16"></div>
              <div className="px-2 py-1 sm:py-3 sm:px-6 bg-gray-500/60 rounded-3xl h-8 w-24 max-sm:w-16"></div>
            </div>
          </div>
        </div>

        {/* VIDEO BACKGROUND */}
        <div className="mt-[40%] sm:mt-0 w-screen aspect-video bg-black">
          <div className=" video-background bg-gray-900 w-[95%] h-[95%] mx-auto mt-14"></div>
        </div>
      </div>

      {/* SECONDARY CONTAINER */}
      <div className="bg-black px-2">
        <div className="sm:-mt-40 mt-10 sm:pl-10 pl-3 relative z-10 animate-pulse">
          {/* MOVIE LIST */}
          <ShimmerMovieList />
          <ShimmerMovieList />         
          {/* MOVIE LIST ENDS */}
        </div>
      </div>
    </div>
  );
};

const ShimmerMovieList = () =>{
  return (
    <div className="p-1">
            <p className="bg-gray-700 rounded-3xl sm:w-1/5 sm:h-10 py-4 h-7 w-2/4"></p>
            <div className="flex gap-5 overflow-x-scroll hide-scrollbar">
              <div className="my-10 sm:w-32  sm:h-48 w-24 h-40 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 sm:w-32  sm:h-48 w-24 h-40 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 sm:w-32  sm:h-48 w-24 h-40 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 sm:w-32  sm:h-48 w-24 h-40 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 sm:w-32  sm:h-48 w-24 h-40 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 sm:w-32  sm:h-48 w-24 h-40 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 sm:w-32  sm:h-48 w-24 h-40 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 sm:w-32  sm:h-48 w-24 h-40 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 sm:w-32  sm:h-48 w-24 h-40 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 sm:w-32  sm:h-48 w-24 h-40 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 sm:w-32  sm:h-48 w-24 h-40 bg-gray-700 rounded-2xl shrink-0"></div>
            </div>
          </div>
  );
}

export default ShimmerBrowsePage;
