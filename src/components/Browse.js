import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useRatedMovies from "../hooks/useRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useRatedShows from "../hooks/useRatedShows";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
import useShowDetails from "../hooks/useShowDetails";

const Browse = () => {
  const viewGptSearch = useSelector((store) => store.gpt?.viewGptSearch);
  useNowPlayingMovies();
  useRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  useRatedShows();
  useShowDetails();
  return (
    <div className="">
      <Header showOtherHeaderElements={true} />
      {
      //This will toggle GPT search page and Main Page.
      viewGptSearch ? (
        <GptSearchPage />
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
