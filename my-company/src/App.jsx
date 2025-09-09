import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact fron './components/Contact';
import  Footer from './components/Footer';
import Navbar from './components/Navbar';



function App() {

    const styles = {
       container: {
           display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
    },
          content: {
               flex: 1,
               padding: "20px",
    },
  };
    return (
        <BrowserRouter>
        <div style={style.container}>
        <Navbar />
          <Routes style={styles.content}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          </div>
        </BrowserRouter>
    );
}

export default App;