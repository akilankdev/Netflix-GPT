import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  return (
    <div className="bg-black px-2">
      {/* Initially movies is null,It will give ERROR so thats why below condition is used */}
      {movies && (
        //-mt will make the element move upper.
        <div className="-mt-40 pl-8 relative z-10">
          <MovieList title="Now Playing" movies={movies} />
          <MovieList title="Trending" movies={movies} />
          <MovieList title="Top Rated" movies={movies} />
          <MovieList title="Popular" movies={movies} />
          <MovieList title="Upcoming" movies={movies} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
