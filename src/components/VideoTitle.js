import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="py-60 px-10">
      <h1 className="font-bold text-6xl py-2">{title}</h1>
      <p className='text-lg w-1/2'>{overview}</p>
      <div>
        <button className="text-xl bg-black text-white py-4 px-10 rounded-md mt-2 mr-3">▶️Play</button>
        <button className="text-xl py-4 px-10 bg-black text-white rounded-md opacity-40">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle