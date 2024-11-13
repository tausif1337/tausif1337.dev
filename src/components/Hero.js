import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/images/tausif1337.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <img
        src={profileImage}
        alt="Md. Tausif Hossain"
        className="profile-pic"
      />
      <div className="hero-text">
        <h1 className="hero-title">Md. Tausif Hossain</h1>
        <p className="hero-subtitle">
          Technical Leader | Bridging Business Goals and Tech Excellence
        </p>
        <p className="hero-summary">
          Experienced in developing scalable web and mobile solutions, with a strong track record of enhancing performance and elevating user experience.
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
