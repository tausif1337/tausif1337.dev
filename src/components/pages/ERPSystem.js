
import React from 'react';
import './LandingPage.css'; // Custom CSS for styling

function ERPSystem() {
  return (
    <div className="landing-page">
      <section className="hero">
        <h1>Centralize Your Business Processes</h1>
        <p>A comprehensive ERP solution for seamless departmental integration.</p>
        <button className="cta-button">Get Started Today</button>
      </section>
      <section className="overview">
        <h2>Project Overview</h2>
        <p>Our ERP system supports businesses in managing various processes efficiently by providing a unified data and operations platform.</p>
        <h3>Technologies Used</h3>
        <p>React, Laravel</p>
      </section>
      <section className="benefits">
        <h2>Benefits</h2>
        <ul>
          <li>Integrated data access</li>
          <li>Improved workflow efficiency</li>
          <li>Customizable and scalable</li>
        </ul>
      </section>
      <footer className="footer">
        <p>Associated with: DevTechGuru Ltd.</p>
        <p>Contact us for more details.</p>
      </footer>
    </div>
  );
}

export default ERPSystem;
