import React from 'react'
import { Link } from 'react-router-dom';
import {Play,Info} from 'lucide-react';
import { useSelector } from 'react-redux';

const VideoTitle = ({title,overview,showId}) => {
  const trailerKey = useSelector((store) => store.shows?.trailerVideo?.key);
  return (
    <div className="pt-[45%] sm:pt-60 sm:px-10 pl-3 absolute  w-screen aspect-video text-white pointer-events-none">
      <h1 className="font-bold text-xl sm:text-6xl py-2">{title}</h1>
      <p className='text-sm sm:text-lg sm:w-1/2'>{overview}</p>
      <div className='pointer-events-auto flex items-center mt-4'>
        <a href={`https://www.youtube.com/watch?v=${trailerKey}`}
            target="_blank"
            rel="noreferrer" className="sm:text-xl font-bold text-sm bg-white text-black px-2 py-1 sm:py-3 sm:px-8 rounded-sm mr-5 flex gap-2 items-center hover:bg-white/80"><Play size={18} fill="black" />Play</a>
        <Link to={`/tv/${showId}`}><button className="sm:text-xl text-sm px-2 py-1 sm:py-3 sm:px-6 bg-gray-500/60 text-white font-bold rounded-sm flex items-center gap-2 hover:bg-gray-500/90"><Info color="white" size={18} />More Info </button></Link>
      </div>
    </div>
  )
}

export default VideoTitle