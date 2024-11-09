import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './projects.css'; // Custom CSS for styling

function CMSSystem() {
  return (
    <div>
      <Header />
      <div className="landing-page">
        <section className="hero">
          <h1>Manage Content with Ease</h1>
          <p>Create, edit, and publish your digital content effortlessly.</p>
        </section>
        <section className="overview">
          <h2>Project Overview</h2>
          <p>Our CMS empowers users to manage content across platforms, providing a seamless experience for content creation and publication.</p>
          <h3>Technologies Used</h3>
          <p>React, Django</p>
        </section>
        <section className="benefits">
          <h2>Benefits</h2>
          <ul>
            <li>Easy-to-use editor</li>
            <li>Multilingual content support</li>
            <li>Version control and scheduling</li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default CMSSystem;