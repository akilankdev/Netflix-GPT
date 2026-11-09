import React from "react";
import { TMDB_BACKDROP_URL } from "../../utils/constants";

const ShowHero = ({ show }) => {
  const {
    backdrop_path,
    genres,
    tagline,
    name,
    overview,
    vote_average,
    number_of_seasons,
    first_air_date,
    last_air_date
  } = show;
  return (
    <section className="text-white flex items-end min-h-[80vh]">
      {/* BACKGROUND IMG */}
      <img
        src={TMDB_BACKDROP_URL + backdrop_path}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* BOTTOM GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      {/* LEFT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
      {/* CONTENT STARTS */}
      <div className="relative z-20 sm:py-2 ml-3 sm:ml-7">
        <h1 className="text-3xl sm:text-5xl">{name}</h1>
        <p className="italic">{tagline}</p>
        <div className="flex flex-wrap gap-x-2">
          <span>{"("+first_air_date.slice(0,4)} - {last_air_date?.slice(0,4)+")"}</span>
          <span>•</span>
          <span>{number_of_seasons} Seasons</span>
          <span>•</span>
          <span className="text-yellow-300">{vote_average?.toFixed(1)}/10</span>
          <span>•</span>
          <span>{genres?.map(genre=>genre.name).join(", ")}</span>
        </div>
        <p className="leading-relaxed text-sm sm:text-base sm:max-w-2xl">{overview}</p>
      </div>
    </section>
  );
};

export default ShowHero;
