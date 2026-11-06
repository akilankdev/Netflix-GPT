import { useState } from "react";
import { BACKEND_BASE_URL } from "../utils/constants";
import { addRecommendations } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
const useGeminiRecommendations = () => {
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  const fetchGeminiRecommendations = async (prompt) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${BACKEND_BASE_URL}/gemini-recommendations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: prompt,
          }),
        },
      );
      const json = await response.json();
      if(!response.ok) {
        throw new Error(
          json.error || "Unable to generate recommendations"
        )
      }
      // console.log("GEMINI RECOMM: ", json);
      dispatch(addRecommendations(json));
    } catch (error) {
      console.error("Error occurred: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  return {loading,fetchGeminiRecommendations};
};

export default useGeminiRecommendations;
