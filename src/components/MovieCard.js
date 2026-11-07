import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ name, posterPath }) => {
  return (
    <>
      {posterPath && (
        <div className="sm:w-36 shrink-0">
          <img
            src={MOVIE_POSTER_URL + posterPath}
            alt={name + "-movie-image"}
            className="sm:w-auto w-16"
          />
        </div>
      )}
    </>
  );
};

export default MovieCard;
