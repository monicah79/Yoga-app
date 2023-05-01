/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    if (menuOpen) {
      wrapper.style.overflow = 'hidden';
    } else {
      wrapper.style.overflow = '';
    }
  }, [menuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  return (
    <>
      <div className="wrapper">
        <nav className={scroll ? 'navbar nav-scroll' : 'navbar'}>
          <div>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img className='logo-img' src="images/logo.jpg" alt="logo" />
            </Link>
          </div>
          <div className="navbar-container">
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
                  Our Classes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Calendar" className="nav-links" onClick={closeMobileMenu}>
                  Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* Rest of your application goes here */}
      </div>
    </>
  );
}

export default Navbar;
