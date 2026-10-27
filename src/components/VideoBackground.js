import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
const VideoBackground = ({movieId}) => {
  const dispatch = useDispatch();
  //Must use optional chaining
  const trailerKey = useSelector((store)=> store.movies.trailerVideo?.key);
  const getMovieVideos = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();
    //Filtering the all the videos which are Trailers
    const filteredTrailers = json.results.filter((video) => video.type === "Trailer");
    //Handling the case if there is no trailer video for that movie
    const trailer = filteredTrailers.length? filteredTrailers[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    console.log(trailer);
  }
  useEffect(()=>{
    getMovieVideos();
  },[])
  return (
    <div>
      {/* Copied from Youtube embed */}
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/` + trailerKey} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe></div>
  )
}

export default VideoBackground