
import React from 'react';
import './LandingPage.css'; // Custom CSS for styling

function ImplantSupportSystem() {
  return (
    <div className="landing-page">
      <section className="hero">
        <h1>Revolutionizing Orthopedic Implants</h1>
        <p>Automated AI-powered X-ray analysis for better implant decision-making.</p>
        <button className="cta-button">Discover More</button>
      </section>
      <section className="overview">
        <h2>Project Overview</h2>
        <p>The Intelligent Implant Support System assists doctors in making precise implant decisions by automating the analysis of X-ray images and providing crucial trial implant insights.</p>
        <h3>Technologies Used</h3>
        <p>AI, React, Django</p>
      </section>
      <section className="benefits">
        <h2>Benefits</h2>
        <ul>
          <li>Enhanced decision accuracy</li>
          <li>Faster pre-surgical planning</li>
          <li>User-friendly interface for medical practitioners</li>
        </ul>
      </section>
      <footer className="footer">
        <p>Associated with: DevTechGuru Ltd.</p>
        <p>Contact us for more information.</p>
      </footer>
    </div>
  );
}

export default ImplantSupportSystem;
