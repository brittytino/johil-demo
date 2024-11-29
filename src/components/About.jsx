// src/components/About.js
import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          We are a restaurant dedicated to serving delicious food with the best ingredients.
        </p>
      </div>
    </section>
  );
};

export default About;