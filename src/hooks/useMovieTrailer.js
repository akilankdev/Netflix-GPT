import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { BACKEND_BASE_URL } from "../utils/constants";
 //Fetch Movie trailer and updates redux store
const useMovieTrailer = (movieId) => {
 
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;
    dispatch(addTrailerVideo(null));
    const controller = new AbortController();

    const getMovieVideos = async () => {
      try {
        const data = await fetch(
          BACKEND_BASE_URL + "/movie/" + movieId + "/videos",
          { signal: controller.signal },
        );
        const json = await data.json();
        //Filtering the all the videos which are Trailers
        const filteredTrailers = json.results.filter(
          (video) => video.type === "Trailer",
        );
        //Handling the case if there is no trailer video for that movie
        const trailer = filteredTrailers.length
          ? filteredTrailers[0]
          : json.results[0];
        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error.message);
        }
      }

    };

    getMovieVideos();
    return () => controller.abort();
  }, [movieId,dispatch]);
};

export default useMovieTrailer;
