import { Link, useParams } from "react-router-dom"
import useShowDetails from "../../hooks/useShowDetails";
import { useSelector } from "react-redux";
import ShowHero from "./ShowHero";
import MovieList from "../MovieList";
import useSimilarShows from "../../hooks/useSimilarShows";
import useShowTrailer from "../../hooks/useShowTrailer";

const ShowDetails = () => {
  const trailerVideo = useSelector(store=> store.shows.trailerVideo);
  const {showId} = useParams();
  const loading = useShowDetails(showId);
  useSimilarShows(showId);
  const show = useSelector(store=> store.shows.showDetails);
  useShowTrailer(showId);
  const similarShows = useSelector(store=> store.shows.similarShows);
  if(loading) {
    return (
      <div className="bg-black h-screen w-screen flex items-center justify-center text-white font-bold">Loading Show Details...</div>
    )
  };

  return (
    <div className="bg-black min-h-screen">
      <Link to="/browse" className="absolute z-20 top-0 right-0 mt-2 mr-2 sm:mt-4 sm:mr-4 bg-orange-500 px-3 py-2 font-semibold rounded-md hover:bg-orange-600 transition-colors duration-300 text-white">Back to Home</Link>
      {show &&
      (<ShowHero show={show} trailerVideo={trailerVideo}/>)
      }
      <div className="relative z-20">{similarShows && <MovieList title="Similar Shows" movies={similarShows} mediaType="tv"/>}</div>
      
    </div>
  )
}

export default ShowDetails