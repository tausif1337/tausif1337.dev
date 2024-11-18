import React from "react";
import './assets/styles/Experience.css';
import DataSoft from './assets/images/datasoft-systems-bangladesh-limited.jpg';
import DevTechGuru from './assets/images/devtechguru.jpg';

function Experience() {
  const experiences = [
    {
      role: "Tech Lead",
      company: "DevTechGuru",
      duration: "Jan 2023 - Present",
      description: "Led a technical team in the development of advanced projects, ensuring adherence to best practices, efficient project delivery, and the growth and mentoring of team members.",
      image: DevTechGuru
    },
    {
      role: "Software Engineer",
      company: "DevTechGuru",
      duration: "Jan 2022 - Dec 2022",
      description: "Developed and maintained full-stack applications, contributing to the enhancement of code quality and collaborating closely with cross-functional teams to improve project outcomes.",
      image: DevTechGuru
    },
    {
      role: "Assoc. Software Engineer",
      company: "DevTechGuru",
      duration: "Nov 2021 - Dec 2021",
      description: "Assisted in the early phases of software projects, gaining experience in applying software engineering principles and participating in foundational development efforts.",
      image: DevTechGuru
    },
    {
      role: "Software Engineer Intern",
      company: "DataSoft",
      duration: "Feb 2021 - May 2021",
      description: "Created a responsive company web presence and contributed to the development of a facial-recognition-based attendance management system.",
      image: DataSoft
    }
  ];

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-header">
              <img src={exp.image} alt={`${exp.company} logo`} className="company-logo" />
              <div>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                <span className="timeline-duration">{exp.duration}</span>
              </div>
            </div>
            <p className="timeline-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
