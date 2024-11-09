import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './projects.css'; // Custom CSS for styling

function LabManagementSystem() {
  return (
    <div>
      <Header />
      <div className="landing-page">
        <section className="hero">
          <h1>Streamline Your Lab Operations</h1>
          <p>Enhance sample tracking, data management, and workflow automation.</p>
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
      </div>
      <Footer />
    </div>
  );
}

export default LabManagementSystem;