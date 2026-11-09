import { useParams } from "react-router-dom"
import useShowDetails from "../../hooks/useShowDetails";
import { useSelector } from "react-redux";
import ShowHero from "./ShowHero";
import MovieList from "../MovieList";
import useSimilarShows from "../../hooks/useSimilarShows";

const ShowDetails = () => {
  const {showId} = useParams();
  const loading = useShowDetails(showId);
  useSimilarShows(showId);
  const show = useSelector(store=> store.shows.showDetails);
  const similarShows = useSelector(store=> store.shows.similarShows);
  if(loading) {
    return (
      <div className="bg-black h-screen w-screen flex items-center justify-center text-white font-bold">Loading Show Details...</div>
    )
  };

  return (
    <div className="bg-black min-h-screen">
      {show &&
      (<ShowHero show={show}/>)
      }
      <div className="relative z-20">{similarShows && <MovieList title="Similar Shows" movies={similarShows} mediaType="tv"/>}</div>
      
    </div>
  )
}

export default ShowDetails