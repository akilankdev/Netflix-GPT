import { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addShowDetails } from "../utils/showsSlice";

const useShowDetails = (showId) => {
 
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!showId) return;
    const controller = new AbortController();
    const fetchShowDetails = async () => {
      try {
        dispatch(addShowDetails(null));
        setLoading(true);
        const data = await fetch(BACKEND_BASE_URL + `/tv/${showId}`,{
          signal: controller.signal,
        });
        if (!data.ok) {
          throw new Error(`HTTP error: ${data.status}`);
        }
        const json = await data.json();
        dispatch(addShowDetails(json));
      } catch (error) {
        if(error.name !== "AbortError"){
          console.error(error.message);
        }
        
      } finally {
        setLoading(false);
      }
    };
    fetchShowDetails();
    return () => controller.abort();
    // eslint-disable-next-line
  }, [showId,dispatch]);
  return loading;
};
export default useShowDetails;
