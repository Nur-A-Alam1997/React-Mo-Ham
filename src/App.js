import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClockFunction from './components/clock';
import Counters from './components/counters';
import Movies from './components/movies';
import Navbar from './components/navigation';
import { MovieForm } from './components/movieForm';
function App() {
  return (

    <main className='container'>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<ClockFunction />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieForm />} />
      </Routes>
    </main>
  );
}

export default App;
