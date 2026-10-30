import { useEffect } from "react";
import { BACKEND_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try {
      //We dont need API_OPTIONS anymore since our backend handles that.
      const data = await fetch(BACKEND_BASE_URL + "/popular");
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getPopularMovies();
    // eslint-disable-next-line
  }, []);
};

export default usePopularMovies;
