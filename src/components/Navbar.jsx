import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    document.body.classList.toggle('active');
  };

  return (
    <>
      <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
        <div className="container">
          <h1>
            <a href="#" className="logo">
              Johil<span className="span">.</span>
            </a>
          </h1>

          <nav className={`navbar ${isNavActive ? 'active' : ''}`} data-navbar>
            <ul className="navbar-list">
              <li className="nav-item">
                <a href="#home" className="navbar-link" onClick={toggleNav}>
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="#about" className="navbar-link" onClick={toggleNav}>
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a href="#food-menu" className="navbar-link" onClick={toggleNav}>
                  Shop
                </a>
              </li>

              <li className="nav-item">
                <a href="#blog" className="navbar-link" onClick={toggleNav}>
                  Blog
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="navbar-link" onClick={toggleNav}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-btn-group">
            <button className="search-btn" aria-label="Search" onClick={toggleSearch}>
              <ion-icon name="search-outline"></ion-icon>
            </button>

            <button className="btn btn-hover ">Reservation</button>

            <button 
              className={`nav-toggle-btn ${isNavActive ? 'active' : ''}`} 
              aria-label="Toggle Menu" 
              onClick={toggleNav}
            >
              <span className="line top"></span>
              <span className="line middle"></span>
              <span className="line bottom"></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`search-container ${isSearchActive ? 'active' : ''}`}>
        <div className="search-box">
          <input
            type="search"
            name="search"
            aria-label="Search here"
            placeholder="Type keywords here..."
            className="search-input"
          />

          <button 
            className="search-submit" 
            aria-label="Submit search"
            onClick={toggleSearch}
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>

        <button 
          className="search-close-btn" 
          aria-label="Cancel search"
          onClick={toggleSearch}
        ></button>
      </div>
    </>
  );
};

export default Navbar; 