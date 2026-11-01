import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useRatedMovies from "../hooks/useRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useRatedShows from "../hooks/useRatedShows";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useBreakingBadDetails from "../hooks/useBreakingBadDetails";

const Browse = () => {
  const viewGptSearch = useSelector((store) => store.gpt?.viewGptSearch);
  useNowPlayingMovies();
  useRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  useRatedShows();
  useBreakingBadDetails();
  return (
    <div className="">
      <Header showUserIcon={true} />
      {
      //This will toggle GPT search page and Main Page.
      viewGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
