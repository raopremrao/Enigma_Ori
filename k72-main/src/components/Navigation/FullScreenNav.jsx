import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)





    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])

    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
                    <div className=''>
                        <div className='lg:w-36 w-24'>
                            <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                            {/* <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 11.600000381469727 184.8000030517578 36.400001525878906" data-asc="0.96" width="184.8000030517578" height="36.400001525878906"><defs/><g fill="#ffffff"><g transform="translate(0, 0)"><path d="M21.70 40.60L16.65 40.60L0 12L12.40 12L19.40 27.05L26.40 12L36.15 12L21.70 40.60M26.10 37.20L35.60 18.30L35.60 48L26.10 48L26.10 37.20M3.25 22.20L12.75 39L12.75 48L3.25 48L3.25 22.20ZM47.70 11.60L58.25 11.60L66.60 48L56.25 48L55.70 45.65L51.05 45.65L52.40 37.90L53.90 37.90L47.70 11.60M48.05 48L37.60 48L45.90 14.95L50.55 34.45L48.05 48ZM81.35 29.80L81.35 29.15Q83.35 28.20 83.35 24.40Q83.35 22.10 82.95 20.97Q82.55 19.85 81.57 19.45Q80.60 19.05 78.85 19.05L69.10 19.05L66.35 12L80.55 12Q84.95 12 87.90 13.13Q90.85 14.25 92.32 16.88Q93.80 19.50 93.80 24.05Q93.80 29.30 91.50 32.10L95.25 48L85.25 48L81.35 29.80M78.85 48L69.10 48L69.10 21.55L78.85 21.55L78.85 48ZM107.50 18.60L97.75 41.50L97.75 12L107.50 12L107.50 18.60M107.70 48L97.75 48L112.85 12L122.85 12L107.70 48M111.60 45.15L117.30 31.80L123 48L112.50 48L111.60 45.15ZM159.95 21L137.50 21L137.50 12L159.95 12L159.95 21M149.70 23.50L158.55 23.50L150.50 48L140.10 48L149.70 23.50ZM176.05 37.45L165.65 37.45L170.10 31.65Q171.70 29.55 172.90 27.25Q174.10 24.95 174.10 23Q174.10 21.20 172.70 20.47Q171.30 19.75 169.30 19.75Q167.95 19.75 166.45 20Q164.95 20.25 163.65 20.70L162.15 13.35Q164.85 12.50 167.50 12.05Q170.15 11.60 172.50 11.60Q175.90 11.60 178.52 12.60Q181.15 13.60 182.65 15.77Q184.15 17.95 184.15 21.50Q184.15 24.55 182.85 27.42Q181.55 30.30 179.50 32.95L176.05 37.45M163.85 40L184.80 40L184.80 48L162.45 48L162.45 41.70L163.85 40Z"/></g></g></svg> */}
                        </div>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer'>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>

                    </div>
                </div>
                <div className=' pt-5'>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <a href="/projects" className='linka z-2'><h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Projets</h1></a>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] -z-1'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>My Projects</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>My Projects</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>My Projects</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>My Projects</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <a href="/agence" className='linka z-2'><h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Agence</h1></a>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] -z-1'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Know Us</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Know Us</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Know Us</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Know Us</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <a href="/contact" className='linka z-2'><h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Contact</h1></a>
                        
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] -z-1'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Contact Us</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Contact Us</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Contact Us</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Contact Us</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className='link origin-top relative border-y-1 border-white'>
                        <a href="/blogs" className='linka z-10 w-full flex justify-center'>
                            <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Blogs</h1>
                        </a>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] -z-1'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Read Articles</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Read Articles</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Read Articles</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Read Articles</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav