import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({movieId}) => {
  const getMovieVideos = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();
    console.log(json);
  }
  useEffect(()=>{
    getMovieVideos();
  },[])
  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground