import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BACKEND_BASE_URL } from "../utils/constants";
import { addTrailerVideo } from "../utils/showsSlice";

const useShowTrailer = (showId) => {
  //Fetch Movie trailer and updates redux store
  const dispatch = useDispatch();

  useEffect(() => {
    if (!showId) return;
    const controller = new AbortController();
    const getShowVideos = async () => {
      try {
        dispatch(addTrailerVideo(null));
        const data = await fetch(
          BACKEND_BASE_URL + "/tv/" + showId + "/videos",
          { signal: controller.signal },
        );
        if (!data.ok) {
          throw new Error(`HTTP error: ${data.status}`);
        }
        const json = await data.json();

        //Filtering the all the videos which are Trailers
        const filteredTrailers = json.results.filter(
          (video) => video.type === "Trailer",
        );
        //Handling the case if there is no trailer video for that movie
        //Redux state receives null when no videos are available.
        const trailer = filteredTrailers.length
          ? filteredTrailers[0]
          : json.results[0] || null;
        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error.message);
        }
      }
    };
    getShowVideos();
    return () => controller.abort();
    // eslint-disable-next-line
  }, [showId, dispatch]);
};

export default useShowTrailer;
