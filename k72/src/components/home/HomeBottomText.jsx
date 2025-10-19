import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-5'>
        <div className=' leading-[6vw] border-4 border-white rounded-full px-14 pt-1  uppercase flex items-center justify-center  hover:border-[#D3FD50] hover:text-[#D3FD50]'>
            <Link className='text-[4.5vw] mt-1.5' to='/projects'>Projects</Link>
        </div>
        <div className='leading-[6vw] border-4 border-white rounded-full px-14 pt-1  uppercase flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50]'>
            <Link className='text-[4.5vw] mt-1.5' to='/agence' >Agence</Link>
        </div>
    </div>
  )
}

export default HomeBottomText