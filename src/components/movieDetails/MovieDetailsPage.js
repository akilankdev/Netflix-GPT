import {Link, useParams} from 'react-router-dom';
import useMovieDetails from '../../hooks/useMovieDetails';
import { useSelector } from 'react-redux';
import MovieHero from './MovieHero';
import useMovieTrailer from '../../hooks/useMovieTrailer';
import useSimilarMovies from '../../hooks/useSimilarMovies';
import MovieList from '../MovieList';
import lang from '../../utils/languageConstants';


const MovieDetailsPage = () => {
  const langKey = useSelector((store) => store.userConfig.langValue);
  const trailerVideo = useSelector(store=> store.movies.trailerVideo);
  const similarMovies = useSelector(store=> store.movies.similarMovies);
  const {movieId } = useParams();
  const loading = useMovieDetails(movieId);
  useMovieTrailer(movieId);
  useSimilarMovies(movieId);
  const movie = useSelector(store => store.movies.movieDetails);

  if(loading) {
    return (
      <div className="bg-black min-h-screen text-white font-bold flex items-center justify-center">{lang[langKey].detailsPage.loadingMessage}</div>
    );
  }
  if(!movie) return null;

  return (
    <div className='bg-black min-h-screen'>
      <Link to="/browse" className="absolute z-20 top-0 right-0 mt-2 mr-2 sm:mt-4 sm:mr-4 bg-orange-500 px-3 py-2 font-semibold rounded-md hover:bg-orange-600 transition-colors duration-300 text-white">{lang[langKey].common.home}</Link>
      <MovieHero movie={movie} trailerVideo={trailerVideo} />
      <MovieList title={lang[langKey].detailsPage.similarMov} movies={similarMovies}/>
    </div>
  )
}

export default MovieDetailsPage;