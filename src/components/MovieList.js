
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <MovieCard name={movies[0].title} posterPath={movies[0].poster_path}/>
      </div>
    </div>
  )
}

export default MovieList