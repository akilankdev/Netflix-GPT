import { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addShowDetails } from "../utils/showsSlice";

const useShowDetails = (showId) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const fetchShowDetails = async () => {
   
    try {
      setLoading(true);
      const data = await fetch(BACKEND_BASE_URL + `/tv/${showId}`);
      if (!data.ok) {
        throw new Error(`HTTP error: ${data.status}`);
      }
      const json = await data.json();
      dispatch(addShowDetails(json));
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchShowDetails();
    // eslint-disable-next-line
  }, []);
  return loading;
};
export default useShowDetails;
