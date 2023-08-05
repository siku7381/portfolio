import React from 'react'
import About from '../About';
import Contact from '../Contact';
import Experience from '../Experience';
import Hero from '../Hero'
import Projects from '../Projects';
import Tech from '../Tech';
import Testimonials from '../Testimonials';

const Home = () => {
  return (
    <div className=''>
      <div className=''>

        <Hero />
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}

export default Home;