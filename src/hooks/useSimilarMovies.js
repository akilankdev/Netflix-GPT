import { useEffect } from "react";
import { BACKEND_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

import { addSimilarMovies } from "../utils/moviesSlice";

const useSimilarMovies = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;
    // Clear previous movie recommendations
    dispatch(addSimilarMovies([]));
    const controller = new AbortController();

    const fetchSimilarDetails = async () => {
      try {
        const data = await fetch(
          BACKEND_BASE_URL + `/movie/${movieId}/similar`,
          {
            signal: controller.signal,
          },
        );
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
    fetchSimilarDetails();
    return () => controller.abort();
    // eslint-disable-next-line
  }, [movieId]);
};
export default useSimilarMovies;
