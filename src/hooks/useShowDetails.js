import { useEffect } from 'react'
import { BACKEND_BASE_URL, GOT_SHOW_ID } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addBrbaShowDetails } from '../utils/showsSlice';

const useShowDetails = () => {
  const dispatch = useDispatch();
  const fetchShowDetails = async() => {
    try {
    const data = await fetch(BACKEND_BASE_URL + `/tv/${GOT_SHOW_ID}`);
    const json = await data.json();
    dispatch(addBrbaShowDetails(json));
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