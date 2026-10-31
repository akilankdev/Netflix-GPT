import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { BACKEND_BASE_URL } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(BACKEND_BASE_URL + "/upcoming");
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
