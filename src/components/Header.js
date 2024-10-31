import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <h1>@tausif1337</h1>
      </div>
      <nav className="nav">
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
          href="../assets/tausif1337.pdf"
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
