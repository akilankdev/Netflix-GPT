import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";


const MainContainer = () => {
  const showDetails = useSelector((store)=> store.shows?.showDetails);
  
  if(!showDetails) return;

  return (
//relative — establishes a positioning context for the overlapping elements.
// h-screen — sets the section's height to the viewport height (100vh).
// overflow-hidden — clips content that extends beyond the section's boundaries.
    <div className='overflow-hidden sm:h-screen relative bg-black '>
      <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70'></div>
      <VideoTitle title={showDetails.original_name} overview={showDetails.overview} showId={showDetails.id}/>
      <VideoBackground showId={showDetails.id}/>
    </div>
  )
}

export default MainContainer