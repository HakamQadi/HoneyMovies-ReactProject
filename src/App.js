import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'
import DCard from './components/details-card/DCard';
import Nav from './components/navbar/Nav';
import Movies from './pages/home/movies/Movie';
import Series from './pages/series/Series';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/DCard/:id' element={<DCard />} />
        <Route path='/movies/DCard/:id' element={<DCard />} />
        <Route path='/series/DCard/:id' element={<DCard />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/series' element={<Series />} />
      </Routes>
    </div>
  );
}

export default App;
