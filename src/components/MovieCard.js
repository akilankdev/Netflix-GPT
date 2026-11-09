import { useNavigate } from "react-router-dom";
import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ name, posterPath, movieId,mediaType }) => {
  const navigate = useNavigate();
  const handleCardClick =() => {
    if(mediaType === "movie"){
      navigate(`/movie/${movieId}`);
    } else {
      //Open show details page
      navigate(`/tv/${movieId}`);
    }
    
  }
  return (
    <>
      {posterPath && (
        <button className="sm:w-36 shrink-0" onClick={handleCardClick}>
          <img
            src={MOVIE_POSTER_URL + posterPath}
            alt={name + "-movie-image"}
            className="sm:w-auto w-28"
          />
        </button>
      )}
    </>
  );
};

export default MovieCard;
