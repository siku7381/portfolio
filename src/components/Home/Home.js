import React from 'react'
import About from '../About';
import { StarsCanvas } from '../canvas';
import Contact from '../Contact';
import Experience from '../Experience';
import Hero from '../Hero'
import Projects from '../Projects';
import Tech from '../Tech';
import Testimonials from '../Testimonials';

const Home = () => {
  return (
    <div className=''>
      <div className='relative z-0'>

        <Hero />
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Testimonials />
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}

export default Home;