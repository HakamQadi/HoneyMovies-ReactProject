import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'
import DCard from './components/details-card/DCard';
import Nav from './components/navbar/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/DCard/:id' element={<DCard />} />
      </Routes>
    </div>
  );
}

export default App;
