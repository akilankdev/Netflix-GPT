import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1>{title}</h1>
      {/*pverflow-x-scroll adds x-axis scrolling for movie cards */}
      <div className="overflow-x-scroll">
        {/*flex makes the cards appear horizontally */}
        <div className="flex">
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
