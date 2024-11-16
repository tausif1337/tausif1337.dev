import React, { useState } from 'react';
import { Link } from 'react-scroll';
import cv from './assets/pdf/tausif1337.pdf';
import './assets/styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle logo click to redirect to the homepage
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      {/* Hamburger Menu Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </button>

      {/* Center container for logo and download button */}
      <div className="center-container">
        <div className="logo" onClick={handleLogoClick}>
          <h1>@tausif1337</h1>
        </div>
        <div className="cta">
          <a
            href={cv}
            download="tausif1337.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            Download CV
          </a>
        </div>
      </div>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        {['home', 'about', 'skills', 'experience', 'projects', 'contact', 'blog'].map((section) => (
          <div key={section}>
            {section === 'home' ? (
              <span className="nav-link" onClick={() => window.location.href = '/'}>
                Home
              </span>
            ) : (
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Header;
