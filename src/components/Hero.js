import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <img
        src="/assets/tausif1337.jpg"
        alt="Md. Tausif Hossain"
        className="profile-pic"
      />
      <div className="hero-text">
        <h1 className="hero-title">Md. Tausif Hossain</h1>
        <p className="hero-subtitle">
          Technical Leader - Bridging Business Goals and Technology Excellence
        </p>
        <p className="hero-summary">
          Experienced in building scalable web and mobile solutions with a proven track record of optimizing performance and user experience.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/tausif1337"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tausif1337"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:tausif1337@gmail.com"
            className="social-icon"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
