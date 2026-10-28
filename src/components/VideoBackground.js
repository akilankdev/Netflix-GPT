
import { useSelector } from 'react-redux';

import useMovieTrailer from '../hooks/useMovieTrailer';
const VideoBackground = ({movieId}) => {
  //Must use optional chaining
  const trailerKey = useSelector((store)=> store.movies.trailerVideo?.key);
  //Custom hook to handle fetching data and update redux
  useMovieTrailer(movieId);
  return (
    <div className="">
      {/* Copied from Youtube embed */}
      <iframe className="w-screen aspect-video" src={"https://www.youtube-nocookie.com/embed/" + trailerKey + "?autoplay=1&mute=1&controls=0"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe></div>
  )
}

export default VideoBackground