import { Routes, Route } from 'react-router-dom';
import "./style.css";
import PageNotFound from './components/PageNotFound';
import Home from './components/Home/Home';
import About from './components/About';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { StarsCanvas } from './components/canvas';

export default function App() {

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {/* <Hero /> */}
        {/* <Header /> */}
        </div>
        <div className=" is-fluid">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </div>
        <Footer />
        <StarsCanvas />
    </div>
  );
}