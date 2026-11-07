import { useEffect } from "react";
import { BACKEND_BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRatedShows } from "../utils/showsSlice";

const useRatedShows = () => {
    const ratedShows = useSelector(store=> store.shows.ratedShows);

  const dispatch = useDispatch();
  const getRatedShows = async () => {
    try {
      const data = await fetch(
        BACKEND_BASE_URL + "/rated-shows"
      );
      const json = await data.json();
      dispatch(addRatedShows(json.results));
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    !ratedShows && getRatedShows();
    // eslint-disable-next-line
  }, []);
};

export default useRatedShows;
