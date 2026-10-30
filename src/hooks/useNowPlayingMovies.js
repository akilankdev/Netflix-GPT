import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  //Fetch TMDB now playing API and update redux store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line
  }, []);
};

export default useNowPlayingMovies;
