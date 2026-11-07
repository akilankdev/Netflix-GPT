import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRatedMovies } from "../utils/moviesSlice";
import { BACKEND_BASE_URL } from "../utils/constants";

const useRatedMovies = () => {
  const ratedMovies = useSelector(store=> store.movies.ratedMovies);
  const dispatch = useDispatch();
  const getRatedMovies = async () => {
    try {
      const data = await fetch(
        BACKEND_BASE_URL + "/top-rated"

      );
      const json = await data.json();
      dispatch(addRatedMovies(json.results));
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    !ratedMovies && getRatedMovies();
    // eslint-disable-next-line
  }, []);
};

export default useRatedMovies;
