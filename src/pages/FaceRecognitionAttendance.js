
import React from 'react';
import './LandingPage.css'; // Custom CSS for styling

function FaceRecognitionAttendance() {
  return (
    <div className="landing-page">
      <section className="hero">
        <h1>Effortless Attendance with Face Recognition</h1>
        <p>Simplifying attendance management for institutions and companies.</p>
        <button className="cta-button">Request a Demo</button>
      </section>
      <section className="overview">
        <h2>Project Overview</h2>
        <p>This system leverages facial recognition technology to automate and simplify attendance tracking, ensuring accuracy and efficiency.</p>
        <h3>Technologies Used</h3>
        <p>AI, React, Django</p>
      </section>
      <section className="benefits">
        <h2>Benefits</h2>
        <ul>
          <li>Automated attendance tracking</li>
          <li>Enhanced security</li>
          <li>Accurate data reporting</li>
        </ul>
      </section>
      <footer className="footer">
        <p>Associated with: DataSoft Systems Bangladesh Ltd.</p>
        <p></p>
      </footer>
    </div>
  );
}

export default FaceRecognitionAttendance;
