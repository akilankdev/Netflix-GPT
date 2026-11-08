import { useNavigate } from "react-router-dom";
import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ name, posterPath, movieId }) => {
  const navigate = useNavigate();
  const handleCardClick =() => {
    navigate(`/movie/:${movieId}`);
  }
  return (
    <>
      {posterPath && (
        <button className="sm:w-36 shrink-0" onClick={handleCardClick}>
          <img
            src={MOVIE_POSTER_URL + posterPath}
            alt={name + "-movie-image"}
            className="sm:w-auto w-16"
          />
        </button>
      )}
    </>
  );
};

export default MovieCard;
