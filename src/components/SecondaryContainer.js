import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const shows = useSelector((store) => store.shows);
  const {ratedShows} = shows;
  
  const {nowPlayingMovies,ratedMovies,popularMovies,upcomingMovies } = movies;
  
  return (
    <div className="bg-black px-2">
      {/* Initially movies is null,It will give ERROR so thats why below condition is used */}
      {popularMovies  && (
        //-mt will make the element move upper.
        <div className="-mt-40 pl-8 relative z-10">
          <MovieList title="Popular" movies={popularMovies} />
          {/* <MovieList title="Top Rated" movies={ratedMovies} />
          <MovieList title="Popular Movies" movies={popularMovies} />
          <MovieList title="Upcoming Movies" movies={upcomingMovies} />
          <MovieList title="Rated Shows" movies={ratedShows} /> */}

        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
