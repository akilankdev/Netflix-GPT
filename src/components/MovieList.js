import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-1 text-white">
      <h1 className="text-2xl py-4">{title}</h1>
      {/*pverflow-x-scroll adds x-axis scrolling for movie cards */}
      <div className="overflow-x-scroll hide-scrollbar">
        {/*flex makes the cards appear horizontally */}
        <div className="flex gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              name={movie.title}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
