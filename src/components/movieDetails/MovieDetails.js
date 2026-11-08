import {useParams} from 'react-router-dom';
import useMovieDetails from '../../hooks/useMovieDetails';
import { useSelector } from 'react-redux';
import MovieHero from './MovieHero';

const MovieDetails = () => {
  const {movieId } = useParams();
  const loading = useMovieDetails(movieId);
  const movie = useSelector(store => store.movies.movieDetails);
  if(loading) {
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">Loading movie details</div>
    );
  }
  if(!movie) return null;

  return (
    <div className='bg-black min-h-screen'>
      <MovieHero movie={movie} />
    </div>
  )
}

export default MovieDetails