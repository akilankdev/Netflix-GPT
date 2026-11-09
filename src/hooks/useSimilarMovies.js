import { useEffect } from "react";
import { BACKEND_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

import { addSimilarMovies } from "../utils/moviesSlice";

const useSimilarMovies = (movieId) => {
  const dispatch = useDispatch();
  const fetchShowDetails = async () => {
    try {
      const data = await fetch(BACKEND_BASE_URL + `/movie/${movieId}/similar`);
      if (!data.ok) {
        throw new Error(`HTTP error: ${data.status}`);
      }
      const json = await data.json();
      dispatch(addSimilarMovies(json?.results));
      // dispatch(addShowDetails(json));
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchShowDetails();
    // eslint-disable-next-line
  }, [movieId]);
};
export default useSimilarMovies;