import { useEffect } from 'react';
import {BACKEND_BASE_URL} from '../utils/constants';
const useGeminiRecommendations = () => {
  const fetchGeminiRecommendations = async () => {
    try{
      const data = await fetch(`${BACKEND_BASE_URL}/gemini-recommendations`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: "I wanna watch funny tamil movies."
        })
      });
    const json = await data.json();
    console.log("GEMINI RECOMM: ", json);
    } catch(error) {
      console.error("Error occurred: "+ error.message);
    }
  }

  useEffect(()=>{
    fetchGeminiRecommendations();
  },[]);
}

export default useGeminiRecommendations;