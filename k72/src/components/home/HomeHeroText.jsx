import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] p-5 text-center'>
        <div className='text-[9.5vw] leading-[8vw] justify-center flex items-center'>THE SPARK FOR</div>
        <div className='text-[9.5vw] leading-[8vw] justify-center flex items-start'>ALL <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-3 '><Video /></div> THINGS</div>
        <div className='text-[9.5vw] leading-[8vw] justify-center flex items-center'>CREATIVE</div>
    </div>
  )
}

export default HomeHeroText