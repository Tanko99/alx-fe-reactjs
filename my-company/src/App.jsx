import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './pages/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
       <Routes>
        <Route path= "/"  element= {<Home />} />
        <Route path= "/about" element= {<About />} />
        <Route path= "/services" element= {<Services />} />
        <Route path= "/contact" elemnt= {<Contact />} />
       </Routes> 
       <Footer />
    </BrowserRouter>
  );
}

export default App;