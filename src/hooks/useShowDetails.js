import { useEffect } from 'react'
import { BACKEND_BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addShowDetails } from '../utils/showsSlice';

const useShowDetails = (showId) => {
  const dispatch = useDispatch();
  const fetchShowDetails = async() => {
    try {
    const data = await fetch(BACKEND_BASE_URL + `/tv/${showId}`);
    const json = await data.json();
    dispatch(addShowDetails(json));
    } catch(error) {
      console.error(error.message);
    }
  }
  useEffect(()=>{
    fetchShowDetails();
    // eslint-disable-next-line
  },[])
}

export default useShowDetails;