import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="logo">
        <h1>@tausif1337</h1>
      </div>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        {['home','about', 'skills', 'experience', 'projects', 'contact', 'blog'].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            offset={-70}
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </nav>
      <div className="cta">
        <a
          href="/assets/tausif1337.pdf"
          download="tausif1337.pdf"
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
