import { useEffect } from "react";
import { BACKEND_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRatedShows } from "../utils/showsSlice";

const useRatedShows = () => {
  const dispatch = useDispatch();
  const getRatedShows = async () => {
    try {
      const data = await fetch(
        BACKEND_BASE_URL + "/rated-shows"
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
