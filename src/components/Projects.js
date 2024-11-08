import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import healthcareIcon from './assets/projects/healthcareAI.webp';
import parkingIcon from './assets/projects/parkingAI.webp';
import labIcon from './assets/projects/lims.webp';
import faceRecognitionIcon from './assets/projects/face-recognition.webp';
import erpIcon from './assets/projects/erp.webp';
import cmsIcon from './assets/projects/cms.webp';

function Projects() {
  const projectData = [
    {
      title: "Intelligent Implant Support System",
      developedFor: "Avail Ortho, a US-based startup focusing on Health AI",
      techUsed: "AI, React, Django",
      description:
        "A system aiding doctors in implant decisions by automating X-ray image analysis and providing key trial implant insights.",
      associatedWith: "DevTechGuru Ltd.",
      imageUrl: healthcareIcon,
      githubLink: "",
      liveLink: ""
    },
    {
      title: "Smart Parking Mgmt System",
      developedFor: "Sun Moon Star Tower",
      techUsed: "AI, React, Django",
      description:
        "Digital solution for optimizing parking operations, allowing efficient reservation, payment, and availability tracking.",
      associatedWith: "DevTechGuru Ltd.",
      imageUrl: parkingIcon,
      githubLink: "",
      liveLink: ""
    },
    {
      title: "Face-Recognition Attendance System",
      developedFor: "Yoga Chandrima",
      techUsed: "AI, React, Django",
      description:
        "An advanced software that uses facial recognition to simplify attendance management for institutions and companies.",
      associatedWith: "DataSoft Systems Bangladesh Ltd.",
      imageUrl: faceRecognitionIcon,
      githubLink: "",
      liveLink: ""
    },
    {
      title: "Laboratory Info Mgmt System",
      developedFor: "Wyss Institute, Harvard University",
      techUsed: "React, Django",
      description:
        "Tool for streamlining sample handling, automating workflows, ensuring data integrity, and boosting efficiency in labs.",
      associatedWith: "DevTechGuru Ltd.",
      imageUrl: labIcon,
      githubLink: "",
      liveLink: ""
    },
    
    {
      title: "Enterprise Resource Planning System",
      developedFor: "Multiple Local and Foreign Companies",
      techUsed: "Laravel",
      description:
        "Web platform that integrates business processes, enhancing efficiency and seamless data handling across departments.",
      associatedWith: "DevTechGuru Ltd.",
      imageUrl: erpIcon,
      githubLink: "",
      liveLink: ""
    },
    {
      title: "Content Mgmt System",
      developedFor: "QK Ahmad Foundation",
      techUsed: "React, Django",
      description:
        "User-centric platform for effortless creation, editing, organization, and publishing of digital content on sites/apps.",
      associatedWith: "DevTechGuru Ltd.",
      imageUrl: cmsIcon,
      githubLink: "",
      liveLink: ""
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="card project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p><strong>Developed For:</strong> {project.developedFor}</p>
              <p><strong>Tech Used:</strong> {project.techUsed}</p>
              <p className="project-description">{project.description}</p>
              <p><strong>Associated With:</strong> {project.associatedWith}</p>
              <div className="project-links">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;