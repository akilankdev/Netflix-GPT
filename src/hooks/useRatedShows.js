import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addRatedShows } from "../utils/showsSlice";

const useRatedShows = () => {
  const dispatch = useDispatch();
  const getRatedShows = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
       
      );
      const json = await data.json();
      dispatch(addRatedShows(json.results));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getRatedShows();
    // eslint-disable-next-line
  }, []);
};

export default useRatedShows;
