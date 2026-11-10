import { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/moviesSlice";

const useMovieDetails = (movieId) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();
    const fetchMovieDetails = async () => {
      try {
        dispatch(addMovieDetails(null));
        setLoading(true);
        const data = await fetch(BACKEND_BASE_URL + `/movie/${movieId}`, {
          signal: controller.signal,
        });
        if (!data.ok) {
          throw new Error(`HTTP error: ${data.status}`);
        }
        const json = await data.json();
        dispatch(addMovieDetails(json));
      } catch (error) {
        // Ignore errors caused by intentional cancellation
        if (error.name !== "AbortError") {
          console.error(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };
    fetchMovieDetails();
    // eslint-disable-next-line
  }, [movieId, dispatch]);
  return loading;
};
export default useMovieDetails;
