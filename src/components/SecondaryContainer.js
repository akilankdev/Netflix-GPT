import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  
  const {nowPlayingMovies,ratedMovies,popularMovies,upcomingMovies } = movies;
  
  return (
    <div className="bg-black px-2">
      {/* Initially movies is null,It will give ERROR so thats why below condition is used */}
      {nowPlayingMovies && ratedMovies && popularMovies && (
        //-mt will make the element move upper.
        <div className="-mt-40 pl-8 relative z-10">
          <MovieList title="Now Playing" movies={nowPlayingMovies} />
          <MovieList title="Top Rated" movies={ratedMovies} />
          <MovieList title="Popular Movies" movies={popularMovies} />
          <MovieList title="Upcoming Movies" movies={upcomingMovies} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
