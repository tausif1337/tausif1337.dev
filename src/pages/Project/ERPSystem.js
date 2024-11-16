import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './assets/styles/projects.css'; // Custom CSS for styling

function ERPSystem() {
  return (
    <div>
      <Header />
      <div className="landing-page">
        <section className="hero">
          <h1>Centralize Your Business Processes</h1>
          <p>A comprehensive ERP solution for seamless departmental integration.</p>
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
      </div>
      <Footer />
    </div>
  );
}

export default ERPSystem;
