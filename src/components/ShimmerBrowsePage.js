import React from "react";
import Header from "./Header";

const ShimmerBrowsePage = () => {
  return (
    <div>
      <Header showOtherHeaderElements={true} />
      {/* MAIN CONTAINER */}
      <div className="overflow-hidden sm:h-screen relative bg-black">
        {/* VIDEO TITLE */}
        <div className="pt-40 sm:pt-60 sm:px-10 pl-3 absolute to-transparent w-screen aspect-video">
          <div className="pl-4 animate-pulse">
            <p className=" py-2 bg-gray-700 rounded-3xl w-1/4 h-14 "></p>
            <p className="text-sm sm:text-lg mt-4 bg-gray-700 rounded-3xl w-1/2 h-8 "></p>
            <p className="text-sm sm:text-lg mt-4 bg-gray-700 rounded-3xl w-1/2 h-8 "></p>
            <p className="text-sm sm:text-lg mt-4 bg-gray-700 rounded-3xl w-1/2 h-8 "></p>
            <div className="flex items-center mt-4">
              <div className="sm:text-xl text-sm bg-gray-500/60 px-2 py-1 sm:py-3 sm:px-8 rounded-3xl h-8 w-24 mr-5 "></div>
              <div className="sm:text-xl text-sm px-2 py-1 sm:py-3 sm:px-6 bg-gray-500/60 rounded-3xl h-8 w-24"></div>
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
        <div className="sm:-mt-40 sm:pl-8 pl-3 relative z-10 animate-pulse">
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
    <div className="p-1 text-white">
            <p className="bg-gray-700 rounded-3xl w-1/5 h-10 py-4"></p>
            <div className="flex gap-5 overflow-x-scroll hide-scrollbar">
              <div className="my-10 w-32  h-48 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 w-32  h-48 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 w-32  h-48 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 w-32  h-48 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 w-32  h-48 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 w-32  h-48 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 w-32  h-48 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 w-32  h-48 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 w-32  h-48 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 w-32  h-48 bg-gray-700 rounded-2xl shrink-0"></div>
              <div className="my-10 w-32  h-48 bg-gray-700 rounded-2xl shrink-0"></div>
            </div>
          </div>
  );
}

export default ShimmerBrowsePage;
