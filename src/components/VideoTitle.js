import React from 'react'
import {Play,Info} from 'lucide-react';

const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-60 px-10 absolute bg-gradient-to-r from-black/60 via-black/20 to-transparent w-screen aspect-video text-white pointer-events-none">
      <h1 className="font-bold text-6xl py-2">{title}</h1>
      <p className='text-lg w-1/2'>{overview}</p>
      <div className='pointer-events-auto flex items-center mt-4'>
        <button className="text-xl font-bold bg-white text-black py-3 px-8 rounded-sm mr-5 flex gap-2 items-center hover:bg-white/80"><Play size={18} fill="black" />Play</button>
        <button className="text-xl py-3 px-6 bg-gray-500/60 text-white font-bold rounded-sm flex items-center gap-2 hover:bg-gray-500/90"><Info color="white" size={18} />More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle