import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addRatedMovies } from "../utils/moviesSlice";

const useRatedMovies = () => {
  const dispatch = useDispatch();
  const getRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",

      );
      const json = await data.json();
      dispatch(addRatedMovies(json.results));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getRatedMovies();
    // eslint-disable-next-line
  }, []);
};

export default useRatedMovies;
