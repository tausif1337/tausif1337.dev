import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero">
      <img src="/assets/tausif1337.jpg" alt="Md. Tausif Hossain" className="profile-pic" />
      <div className="hero-text">
        <h1>Md. Tausif Hossain</h1>
        <p>Technical Leader - Bridging Business Goals and Technology Excellence</p>
        <div className="social-links">
          <a href="https://github.com/tausif1337" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/tausif1337" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:tausif1337@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;