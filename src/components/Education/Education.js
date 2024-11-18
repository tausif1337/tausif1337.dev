import React from "react";
import './assets/styles/Education.css';

function Education() {
  const education = [
    {
      name: "Bachelor of Science in Computer Science and Engineering",
      institution: "Independent University, Bangladesh",
      duration: "2016 - 2021",
      description: "Specialized in software engineering, algorithms, and data structures."
    },
  ];

  return (
    <section className="section">
      <h2>Education</h2>
      <div className="grid">
        {education.map((edu, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{edu.name}</h3>
            <p className="card-subtitle">{edu.institution}</p>
            <span className="card-duration">{edu.duration}</span>
            <p className="card-description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;