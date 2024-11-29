// src/components/FoodMenu.js
import React from 'react';
import '../css/FoodMenu.css';
// import chickenMasal from '../images/chicken-masal.jpg';

const FoodMenu = () => {
  return (
    <section className="food-menu">
      <div className="container">
        <h2 className="food-menu-title">Food Menu</h2>
        <div className="food-menu-item">
          <img  alt="Chicken Masal" className="food-menu-img" />
          <h3 className="food-menu-item-title">Chicken Masal</h3>
          <p className="food-menu-item-text">A spicy and flavorful chicken dish.</p>
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;