import React from "react";
import './assets/styles/Experience.css';
import DataSoft from './assets/images/datasoft-systems-bangladesh-limited.jpg';
import DevTechGuru from './assets/images/devtechguru.jpg';
import TechnicalBind from './assets/images/technicalbind.jpg';

function Experience() {
  const experiences = [
    {
      role: "Software Architect",
      company: "TechnicalBind",
      duration: "Feb 2017 - Present",
      description: "Leading the development of innovative web applications and software solutions. Managing cross-functional teams, implementing best practices, and driving technical excellence across all projects. Founded and established the company's technical vision and development standards.",
      image: TechnicalBind,
      isFounder: true
    },
    {
      role: "Technical Leader",
      company: "DevTechGuru",
      duration: "Jan 2023 - Present",
      description: "Leading technical teams in developing advanced software solutions. Mentoring team members, ensuring project delivery excellence, and implementing industry best practices. Previously contributed as Software Engineer, helping establish the company's technical foundation.",
      image: DevTechGuru,
      isFounder: true
    },
    {
      role: "Software Engineer Intern",
      company: "DataSoft",
      duration: "Feb 2021 - May 2021",
      description: "Developed and maintained responsive web applications for the company. Implemented facial recognition technology for attendance management systems. Collaborated with senior developers to deliver high-quality software solutions.",
      image: DataSoft
    }
  ];

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${exp.isFounder ? 'founder-item' : ''}`}>
            <div className="timeline-header">
              <img 
                src={exp.image} 
                alt={`${exp.company} logo`} 
                className="company-logo" 
              />
              <div>
                <h3 className="timeline-role">
                  {exp.role}
                  {exp.isFounder && (
                    <span className="founder-badge">
                      {exp.company === 'TechnicalBind' ? 'Founder' : 'Founding Member'}
                    </span>
                  )}
                </h3>
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
