import { useEffect } from "react";
import { BACKEND_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSimilarShows } from "../utils/showsSlice";

const useSimilarShows = (showId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!showId) return;
    // Clear previous movie recommendations
    dispatch(addSimilarShows([]));
    const controller = new AbortController();

    const fetchSimilarDetails = async () => {
      try {
        const data = await fetch(
          BACKEND_BASE_URL + `/tv/${showId}/similar`,
          {
            signal: controller.signal,
          },
        );
        if (!data.ok) {
          throw new Error(`HTTP error: ${data.status}`);
        }
        const json = await data.json();
        dispatch(addSimilarShows(json?.results));
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchSimilarDetails();
    return () => controller.abort;
    // eslint-disable-next-line
  }, [showId]);
};
export default useSimilarShows;
