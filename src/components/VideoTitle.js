import React from 'react'
import {Play} from 'lucide-react';

const VideoTitle = ({title,overview}) => {
  return (
    <div className="py-60 px-10 absolute bg-gradient-to-r from-black/60 via-black/20 to-transparent w-screen aspect-video text-white pointer-events-none">
      <h1 className="font-bold text-6xl py-2">{title}</h1>
      <p className='text-lg w-1/2'>{overview}</p>
      <div className='pointer-events-auto flex items-center mt-4'>
        <button className="text-xl font-bold bg-white/40 text-black py-3 px-8 rounded-sm mr-5 flex gap-2 items-center"><Play size={18} fill="black" />Play</button><button className="text-xl py-3 px-8 bg-white/40 text-black font-bold rounded-sm">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle