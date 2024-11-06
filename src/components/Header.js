import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h1>@tausif1337</h1>
      </div>
      <button className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to="about" smooth={true} duration={500} offset={-70} className="nav-link">
          About
        </Link>
        <Link to="skills" smooth={true} duration={500} offset={-70} className="nav-link">
          Skills
        </Link>
        <Link to="experience" smooth={true} duration={500} offset={-70} className="nav-link">
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={500} offset={-70} className="nav-link">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-70} className="nav-link">
          Contact
        </Link>
      </nav>
      <div className="cta">
        <a
          href="/assets/tausif1337.pdf"
          download="tausif1337.pdf"  // This attribute ensures downloading as a file
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Header;
