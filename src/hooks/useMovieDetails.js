import { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/moviesSlice";

const useMovieDetails = (movieId) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const fetchMovieDetails = async () => {
   
    try {
      setLoading(true);
      const data = await fetch(BACKEND_BASE_URL + `/movie/${movieId}`);
      if (!data.ok) {
        throw new Error(`HTTP error: ${data.status}`);
      }
      const json = await data.json();
      dispatch(addMovieDetails(json));
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovieDetails();
    // eslint-disable-next-line
  }, []);
  return loading;
};
export default useMovieDetails;
