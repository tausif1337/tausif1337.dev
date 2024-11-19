import React from 'react';
import './EducationAchievements.css';

const Education = () => {
  const education = [
    {
      name: "B.Sc in Computer Science and Engineering ",
      institution: "Independent University, Bangladesh",
      duration: "2016 - 2021",
      description: "Specialized in software engineering, algorithms, and data structures."
    },
  ];

  return (
    <section className="section">
      <h2>Education</h2>
      <div className="eca-grid">
        {education.map((edu, index) => (
          <div key={index} className="eca-card">
            <h3 className="eca-card-title">{edu.name}</h3>
            <p className="eca-card-subtitle">{edu.institution}</p>
            <span className="eca-card-duration">{edu.duration}</span>
            <p className="eca-card-description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Achievements = () => {
  const achievements = [
    {
      name: "DIU App Contest 2017",
      description: "Developed AR Doctor, an Augmented Reality-based system for facial analysis and skin disease detection."
    },
    {
      name: "IUB Annual SECS Awards 2017",
      description: "Recognized for outstanding project development and contributions."
    },
  ];

  return (
    <section className="section">
      <h2>Achievements</h2>
      <div className="eca-grid">
        {achievements.map((ach, index) => (
          <div key={index} className="eca-card">
            <h3 className="eca-card-title">{ach.name}</h3>
            <p className="eca-card-description">{ach.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const EducationCoursesAchievements = () => {
  return (
    <div className="eca-container">
      <Education />
      <Achievements />
    </div>
  );
};

export default EducationCoursesAchievements;
