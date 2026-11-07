import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { BACKEND_BASE_URL } from "../utils/constants";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector(store=> store.movies.upcomingMovies);
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(BACKEND_BASE_URL + "/upcoming");
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
    // eslint-disable-next-line
  }, []);
};

export default useUpcomingMovies;
