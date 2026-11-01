import { useEffect } from 'react'
import { BACKEND_BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addBrbaShowDetails } from '../utils/showsSlice';

const useBreakingBadDetails = () => {
  const dispatch = useDispatch();
  const BBShowId = 1396;
  //1396 is the Brba show ID
  const fetchShowDetails = async() => {
    try {
    const data = await fetch(BACKEND_BASE_URL + `/tv/${BBShowId}`);
    const json = await data.json();
    dispatch(addBrbaShowDetails(json));
    } catch(error) {
      console.log(error.message);
    }
  }
  useEffect(()=>{
    fetchShowDetails();
    // eslint-disable-next-line
  },[])
}

export default useBreakingBadDetails;