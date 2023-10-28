import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
     <Route path="/*" element={<Home/>} />
     <Route path="/About" element={<About/>} />
     <Route path="/Works" element={<Works/>} />
     <Route path="/Contact" element={<Contact/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
