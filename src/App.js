import { Routes, Route } from 'react-router-dom';
import "./style.css";
import Playlist from './components/Playlists/Playlist';
import PageNotFound from './components/PageNotFound';
import Header from './components/Header';
import Car from './components/Cars';
import Home from './components/Home/Home';
import About from './components/About';
import Footer from './components/Footer/Footer';

export default function App() {

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/* <Navbar />
          <Hero /> */}
        <Header />
        </div>
        <div className=" is-fluid">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/playlist' element={<Playlist />} />
            <Route path='/car' element={<Car />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}