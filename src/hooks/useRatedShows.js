import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addRatedShows } from '../utils/showsSlice';

const useRatedShows = () => {
  const dispatch = useDispatch();
  const getRatedShows = async () => {
    const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addRatedShows(json.results));
  }
  useEffect(()=>{
    getRatedShows();
    // eslint-disable-next-line
  },[]);
}

export default useRatedShows