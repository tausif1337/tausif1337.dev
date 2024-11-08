
import React from 'react';
import './LandingPage.css'; // Custom CSS for styling

function SmartParkingSystem() {
  return (
    <div className="landing-page">
      <section className="hero">
        <h1>Transform Your Parking Experience</h1>
        <p>Smart, AI-integrated solutions for efficient parking management.</p>
        <button className="cta-button">See How It Works</button>
      </section>
      <section className="overview">
        <h2>Project Overview</h2>
        <p>The Smart Parking Management System streamlines parking operations by allowing reservations, payments, and availability tracking, creating a seamless user experience.</p>
        <h3>Technologies Used</h3>
        <p>AI, React, Django</p>
      </section>
      <section className="benefits">
        <h2>Benefits</h2>
        <ul>
          <li>Reduced waiting times</li>
          <li>Real-time availability tracking</li>
          <li>Simplified payment and booking</li>
        </ul>
      </section>
      <footer className="footer">
        <p>Associated with: DevTechGuru Ltd.</p>
        <p></p>
      </footer>
    </div>
  );
}

export default SmartParkingSystem;
