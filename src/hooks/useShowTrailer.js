import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BACKEND_BASE_URL } from "../utils/constants";
import { addTrailerVideo } from "../utils/showsSlice";

const useShowTrailer = (showId) => {
  //Fetch Movie trailer and updates redux store
  const dispatch = useDispatch();
  const getShowVideos = async () => {
    try {
      const data = await fetch(
        BACKEND_BASE_URL + "/tv/"+ showId +"/videos"
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
    getShowVideos();
    // eslint-disable-next-line
  }, []);
};

export default useShowTrailer;
