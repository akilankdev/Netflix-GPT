import {useParams} from 'react-router-dom';
import useMovieDetails from '../../hooks/useMovieDetails';
import { useSelector } from 'react-redux';
import MovieHero from './MovieHero';
import useMovieTrailer from '../../hooks/useMovieTrailer';
import useSimilarMovies from '../../hooks/useSimilarMovies';
import MovieList from '../MovieList';


const MovieDetailsPage = () => {
  const trailerVideo = useSelector(store=> store.movies.trailerVideo);
  const similarMovies = useSelector(store=> store.movies.similarMovies);
  const {movieId } = useParams();
  const loading = useMovieDetails(movieId);
  useMovieTrailer(movieId);
  useSimilarMovies(movieId);
  const movie = useSelector(store => store.movies.movieDetails);

  if(loading) {
    return (
      <div className="bg-black min-h-screen text-white font-bold flex items-center justify-center">Loading movie details...</div>
    );
  }
  if(!movie) return null;

  return (
    <div className='bg-black min-h-screen'>
      <MovieHero movie={movie} trailerVideo={trailerVideo} />
      <MovieList title="Similar Movies" movies={similarMovies}/>
    </div>
  )
}

export default MovieDetailsPage;