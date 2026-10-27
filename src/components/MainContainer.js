import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store)=> store.movies?.nowPlayingMovies);

  if(!movies) return;

  const mainMovie = movies[0];
  const {original_title,overview,id} = mainMovie;

  return (
//relative — establishes a positioning context for the overlapping elements.
// h-screen — sets the section's height to the viewport height (100vh).
// overflow-hidden — clips content that extends beyond the section's boundaries.
    <div className='overflow-hidden relative h-screen'>
      <VideoBackground movieId={id}/>
      <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer