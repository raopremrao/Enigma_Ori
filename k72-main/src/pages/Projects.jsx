import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

  const projects = [{
    image1: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg',
    image2: 'https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg'
  }, {
    image1: 'https://images.pexels.com/photos/5582599/pexels-photo-5582599.jpeg',
    image2: 'https://images.pexels.com/photos/5324856/pexels-photo-5324856.jpeg'
  }, {
    image1: 'https://images.pexels.com/photos/7809122/pexels-photo-7809122.jpeg',
    image2: 'https://images.pexels.com/photos/7768663/pexels-photo-7768663.jpeg'
  }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 mb-[0]'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
    </div>
  )
}

export default Projects