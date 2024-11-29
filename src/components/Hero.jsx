import React from 'react';
import '../css/hero.css';
import heroImg from '../images/hero-bg.jpg';
import heroBanner from '../images/hero-banner.png';
import heroBannerBg from '../images/hero-banner-bg.png';

const Hero = () => {
  return (
    <section 
      className="hero" 
      id="home" 
      style={{ 
        backgroundImage: `url(${heroImg})`,
        backgroundColor: '#8B0000' // Dark red fallback
      }}
    >
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">The Pinnacle of Joy</p>
          <h3 className="hero-title">Let Us Make Your Celebrations Unforgettable!</h3>
          <p className="hero-text">
          South Indian Weddings, Birthday Parties, or Corporate Events – We Bring Your Vision to Life!
          </p>
          <button className="btn">Plan Your Event Now!</button>
        </div>

        <figure className="hero-banner">
          <img 
            src={heroBannerBg} 
            alt="" 
            aria-hidden="true"
            className="hero-img-bg"
          />
          <img 
            src={heroBanner} 
            loading="lazy" 
            alt="Burger"
            className="hero-img"
          />
        </figure>
      </div>
      <div className="hero-shape-bg"></div>
    </section>
  );
};

export default Hero; 