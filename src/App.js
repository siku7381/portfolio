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
    <div className='r'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Header />
        <div className="container is-fluid">
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
    </div>
  );
}