import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './my-company/NavBar';
import Home from './my-company/Home';
import About from './my-company/About';
import Services from './my-company/Services';
import Contact from './my-company/Contact';
import Footer from './my-company/Footer';


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