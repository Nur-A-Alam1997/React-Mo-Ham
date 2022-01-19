import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counters from './components/counters';
import Movies from './components/movies';
import Navbar from './components/navigation';
import RegistrationForm  from './components/registrationForm';
import Welcome from './components/welcome';
function App() {
  return (

    <main className='container'>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/registration/" element={<RegistrationForm />} />
      </Routes>
    </main>
  );
}

export default App;
