import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Agence = () => {

    gsap.registerPlugin(ScrollTrigger)


    const imageDivRef = useRef(null)
    const imageRef = useRef(null)    

    const imageArray = [
        'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    ]

    useGSAP(function(){
        
        gsap.to(imageDivRef.current, {
            scrollTrigger:{
                trigger: imageDivRef.current,
                markers: true,
                start: 'top 26.7%',
                end: 'top -120%',
                pin: true,
                pinSpacing: true,
                // pinReparent: true,
                pinType: 'fixed',
                scrub: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate:(elem) => {
                    let imageIndex
                    if(elem.progress < 1){
                        imageIndex = Math.floor(elem.progress * imageArray.length)
                    }
                    else{
                        imageIndex = imageArray.length - 1
                    }
                    
                    imageRef.current.src = imageArray[imageIndex]
                }
            }
        })
    })

  return (
    <div className='parent relative'>
        <div id='page1' className='p-1'>
        <div ref={imageDivRef} className='absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-50 left-[15vw]'>
            <img ref={imageRef} className='h-full object-cover w-full ' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
        <div className='relative font-[font2]'>
        <div className='mt-[55vh]'>
            <h1 className='text-[19vw] text-center leading-[17vw]'>SEVEN7Y <br />
            TWO</h1>
        </div>
        <div className='pl-[40%] mt-20'>
            <p className='text-6xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
        </div>
    </div>
    </div>
    <div className='section2 h-screen'>
        {/* <div className='absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-50 left-[15vw]'>
            <img className='h-full object-cover w-full ' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div> */}
        <div className='relative font-[font2]'>
        <div className='mt-[55vh]'>
            <h1 className='text-[19vw] text-center leading-[17vw]'>SEVEN7Y <br />
            TWO</h1>
        </div>
        <div className='pl-[40%] mt-20'>
            <p className='text-6xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Agence