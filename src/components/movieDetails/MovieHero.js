import React from "react";
import { MOVIE_BACKDROP_URL } from "../../utils/constants";

const MovieHero = ({ movie }) => {
  if (!movie) return;
  const {
    genres,
    overview,
    runtime,
    title,
    backdrop_path,
    release_date,
    vote_average,
    tagline,
  } = movie;
  const hours = Math.floor((runtime || 0) / 60);
  const minutes = (runtime || 0) % 60;
  return (
    <section className="flex items-end min-h-[80vh] overflow-hidden">
      {/* BACKGROUND IMG */}
      <img
        src={MOVIE_BACKDROP_URL + backdrop_path}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      ></img>
      {/* LEFT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r bg-gradient-black from-black/60 sm:from-black/80 via-black/50 to-transparent"></div>
      {/* BOTTOM GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t bg-gradient-black from-black/40 via-black/30 to-transparent"></div>
      {/* CONTENT STARTS */}
      <div className="relative z-10 text-white sm:py-2 ml-3 sm:ml-7">
        <h1 className="sm:text-5xl text-3xl">{title}</h1>
        <p className="italic">{tagline && tagline}</p>
        <div className="flex flex-wrap gap-x-2">
          <span>{release_date.slice(0, 4)}</span>
          <span>•</span>
          <span className="text-blue-200">
            {hours}h {minutes}m
          </span>
          <span>•</span>
          <span className="text-yellow-300">{vote_average?.toFixed(1)}/10</span>
          <span>•</span>
          <span>{genres?.map((genre) => genre.name).join(", ")}</span>
        </div>
        <p className="leading-relaxed text-sm sm:text-base sm:max-w-2xl">
          {overview}
        </p>
      </div>
    </section>
  );
};

export default MovieHero;
