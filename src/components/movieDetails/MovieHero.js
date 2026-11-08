
import { MOVIE_BACKDROP_URL } from "../../utils/constants";

const MovieHero = ({ movie }) => {
  if (!movie) return null;

  const {
    backdrop_path,
    title,
    tagline,
    release_date,
    runtime,
    vote_average,
    genres,
    overview,
  } = movie;

  // Convert runtime from minutes into hours and minutes
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <div className="relative min-h-[85vh] flex items-end overflow-hidden bg-black">

      {/* Background image */}
      {backdrop_path && (
        <img
          src={MOVIE_BACKDROP_URL + backdrop_path}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Additional left-side gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

      {/* Movie information */}
      <div className="relative z-10 text-white px-6 sm:px-12 pb-16 pt-32 max-w-4xl">

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
          {title}
        </h1>

        {tagline && (
          <p className="text-gray-300 italic text-lg mb-4">
            {tagline}
          </p>
        )}

        {/* Movie metadata */}
        <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base mb-5">

          <span>{release_date?.slice(0, 4)}</span>

          <span>•</span>

          <span>{hours}h {minutes}m</span>

          <span>•</span>

          <span className="text-yellow-400 font-semibold">
            ★ {vote_average?.toFixed(1)} / 10
          </span>

          <span>•</span>

          <span>
            {genres?.map((genre) => genre.name).join(", ")}
          </span>

        </div>

        {/* Movie overview */}
        <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl">
          {overview}
        </p>

      </div>
    </div>
  );
};

export default MovieHero;
