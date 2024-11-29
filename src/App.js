// src/App.js
import React from 'react';
import Hero from './components/Hero';
import Promo from './components/Promo';
import About from './components/About';
import FoodMenu from './components/FoodMenu';
import Footer from './components/Footer';
import './css/App.css';
import Navbar from './components/Navbar';
import heroImg from './images/hero-bg.jpg'; 

const App = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${heroImg})` }}>
     <Navbar/>
     
      <Hero />
      </div>
      <Promo />
      <About />
      <FoodMenu />
      <Footer />
     
    </div>
  );
};

export default App;