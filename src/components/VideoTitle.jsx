import React from 'react'
import { GiPlayButton } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[200px] absolute w-screen aspect-video flex flex-col pl-14 gap-6 bg-gradient-to-r from-black z-10 text-white'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='text-lg font-semibold opacity-60 w-1/3'>{overview}</p>
        <div className='flex gap-5'>
            <button className='bg-[#d3d3d3] text-black text-xl font-semibold flex items-center gap-2 py-3 px-4 rounded-md hover:bg-opacity-30 '>
              <GiPlayButton />
              <span>Play</span>
              </button>
            <button className='bg-black text-white text-xl font-semibold flex items-center gap-2 py-3 px-4 rounded-md hover:bg-opacity-30'>
              <FaInfoCircle />
              <span>More Info</span>
              </button>
        </div>
    </div>
  )
}

export default VideoTitle