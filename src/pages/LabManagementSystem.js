
import React from 'react';
import './LandingPage.css'; // Custom CSS for styling

function LabManagementSystem() {
  return (
    <div className="landing-page">
      <section className="hero">
        <h1>Streamline Your Lab Operations</h1>
        <p>Enhance sample tracking, data management, and workflow automation.</p>
        <button className="cta-button">Learn More</button>
      </section>
      <section className="overview">
        <h2>Project Overview</h2>
        <p>The Laboratory Information Management System (LIMS) improves lab efficiency by automating workflows and ensuring data integrity.</p>
        <h3>Technologies Used</h3>
        <p>React, Django</p>
      </section>
      <section className="benefits">
        <h2>Benefits</h2>
        <ul>
          <li>Streamlined sample management</li>
          <li>Increased productivity</li>
          <li>Accurate data handling</li>
        </ul>
      </section>
      <footer className="footer">
        <p>Associated with: DevTechGuru Ltd.</p>
        <p></p>
      </footer>
    </div>
  );
}

export default LabManagementSystem;
