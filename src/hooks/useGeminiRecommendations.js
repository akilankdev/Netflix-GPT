import { useState } from "react";
import { BACKEND_BASE_URL } from "../utils/constants";
import { addRecommendations } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
const useGeminiRecommendations = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const fetchGeminiRecommendations = async (prompt) => {
    try {
      setLoading(true);
      // Clear any previous error before starting a new request.
      setError(null);
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
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const json = await response.json();
      // console.log("GEMINI RECOMM: ", json);
      dispatch(addRecommendations(json));
    } catch (error) {
      console.error("Error occurred: " + error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, fetchGeminiRecommendations, error };
};

export default useGeminiRecommendations;
