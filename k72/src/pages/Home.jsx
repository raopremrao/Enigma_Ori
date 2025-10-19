import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div>
        <div className='w-screen h-screen fixed'>
            <Video />
        </div>
        <div className='h-screen w-screen relative flex flex-col justify-between overflow-hidden pb-5'>
            <HomeHeroText />
            <HomeBottomText />
        </div>
    </div>
  )
}

export default Home