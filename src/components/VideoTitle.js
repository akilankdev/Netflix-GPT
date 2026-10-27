import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="py-60 px-10 absolute bg-gradient-to-r from-black/60 via-black/20 to-transparent w-screen aspect-video text-white pointer-events-none">
      <h1 className="font-bold text-6xl py-2">{title}</h1>
      <p className='text-lg w-1/2'>{overview}</p>
      <div className='pointer-events-auto'>
        <button className="text-xl bg-gray-700 text-white py-4 px-10 rounded-sm mt-2 mr-3">▶️Play</button>
        <button className="text-xl py-4 px-10 bg-gray-700 text-white rounded-sm">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle