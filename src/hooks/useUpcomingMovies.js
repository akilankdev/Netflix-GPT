import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      
      );
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getUpcomingMovies();
    // eslint-disable-next-line
  }, []);
};

export default useUpcomingMovies;
