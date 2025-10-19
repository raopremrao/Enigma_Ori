import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import About from './pages/About'
import Lenis from 'lenis'
import { useEffect } from 'react'
// import gsap from 'gsap'; 
// import { ScrollTrigger } from 'gsap/ScrollTrigger'; 


// const App = () => {

//   useEffect(() => {
//     const lenis = new Lenis();

//     lenis.on('scroll', ScrollTrigger.update);
//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000);
//     });

//     gsap.ticker.lagSmoothing(0);
//   }, []);
  

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App