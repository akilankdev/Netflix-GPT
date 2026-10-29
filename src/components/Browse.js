import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useRatedMovies from "../hooks/useRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  useRatedMovies();
  usePopularMovies();
  return (
    <div className="">
      <Header showUserIcon={true} />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
