
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="flex justify-between">
      <Header showUserIcon={true} />
    </div>
  );
};

export default Browse;
