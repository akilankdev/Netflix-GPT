import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  //Fetch Movie trailer and updates redux store
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
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
      console.log(error.message);
    }
  };
  useEffect(() => {
    getMovieVideos();
    // eslint-disable-next-line
  }, []);
};

export default useMovieTrailer;
