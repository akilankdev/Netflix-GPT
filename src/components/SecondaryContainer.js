import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
  const langKey = useSelector(store => store.userConfig.langValue);
  const movies = useSelector((store) => store.movies);
  const shows = useSelector((store) => store.shows);
  const { ratedShows } = shows;

  const { nowPlayingMovies, ratedMovies, popularMovies, upcomingMovies } =
    movies;

  return (
    <div className="bg-black px-2">
      {/* Initially movies is null,It will give ERROR so thats why below condition is used */}
      {popularMovies &&
        ratedShows &&
        nowPlayingMovies &&
        ratedMovies &&
        upcomingMovies && (
          //-mt will make the element move upper.
          <div className="sm:-mt-40 sm:pl-8 pl-3 relative z-10">
            <MovieList title={lang[langKey].mainPage.nowPlaying} movies={nowPlayingMovies} />
            <MovieList title={lang[langKey].mainPage.topRated} movies={ratedMovies} />
            <MovieList title={lang[langKey].mainPage.popular} movies={popularMovies} />
            <MovieList title={lang[langKey].mainPage.upcoming} movies={upcomingMovies} />
            <MovieList title={lang[langKey].mainPage.ratedShows} movies={ratedShows} mediaType="tv"/>
          </div>
        )}
    </div>
  );
};

export default SecondaryContainer;
