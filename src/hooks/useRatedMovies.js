import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addRatedMovies } from "../utils/moviesSlice";
import { BACKEND_BASE_URL } from "../utils/constants";

const useRatedMovies = () => {
  const dispatch = useDispatch();
  const getRatedMovies = async () => {
    try {
      const data = await fetch(
        BACKEND_BASE_URL + "/top-rated"

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
