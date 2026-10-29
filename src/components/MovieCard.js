
import { MOVIE_POSTER_URL } from '../utils/constants'

const MovieCard = ({name,posterPath}) => {
  return (
    <div className="w-36 shrink-0">
      <img src={MOVIE_POSTER_URL + posterPath} alt={name + "-movie-image"}/></div>
  )
}

export default MovieCard