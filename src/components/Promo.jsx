// src/components/Promo.js
import React from 'react';
import '../css/Promo.css';
import promo1 from '../images/promo-1.png';
import promo2 from '../images/promo-2.png';
import promo3 from '../images/promo-3.png';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <h2 className="promo-title">Our Specialties</h2>
        <ul className="promo-list">
          <li className="promo-item">
            <img src={promo1} alt="Mexican Pizza" className="promo-img" />
            <h3 className="promo-item-title">Mexican Pizza</h3>
            <p className="promo-item-text">Delicious pizza with a Mexican twist.</p>
          </li>
          <li className="promo-item">
            <img src={promo2} alt="Soft Drinks" className="promo-img" />
            <h3 className="promo-item-title">Soft Drinks</h3>
            <p className="promo-item-text">Refreshing drinks to quench your thirst.</p>
          </li>
          <li className="promo-item">
            <img src={promo3} alt="French Fry" className="promo-img" />
            <h3 className="promo-item-title">French Fry</h3>
            <p className="promo-item-text">Crispy and golden fries.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Promo;