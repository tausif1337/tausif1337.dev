import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import healthcareIcon from './assets/projects/healthcare-icon.svg';
import parkingIcon from './assets/projects/parking-icon.svg';
import labIcon from './assets/projects/lab-icon.svg';
import faceRecognitionIcon from './assets/projects/face-recognition-icon.svg';
import erpIcon from './assets/projects/erp-icon.svg';
import cmsIcon from './assets/projects/cms-icon.svg';

function Projects() {
  const projectData = [
    {
      title: "Intelligent Implant Support System",
      developedFor: "Avail Ortho, a US-based startup focusing on Health AI",
      techUsed: "React & Django",
      description:
        "A system aiding doctors in implant decisions by automating X-ray image analysis and providing key trial implant insights.",
      associatedWith: "DevTechGuru Ltd.",
      imageUrl: healthcareIcon,
      githubLink: "https://github.com/tausif1337/intelligent-implant-system",
      liveLink: "https://availortho.com/demo"
    },
    {
      title: "Smart Parking Management System",
      developedFor: "Sun Moon Star Tower",
      techUsed: "React & Django",
      description:
        "Digital solution for optimizing parking operations, allowing efficient reservation, payment, and availability tracking.",
      associatedWith: "DevTechGuru Ltd.",
      imageUrl: parkingIcon,
      githubLink: "https://github.com/tausif1337/smart-parking",
      liveLink: "https://smartparking.devtechguru.com"
    },
    {
      title: "Laboratory Info Mgmt System (LIMS)",
      developedFor: "Wyss Institute, Harvard University",
      techUsed: "Laravel",
      description:
        "Tool for streamlining sample handling, automating workflows, ensuring data integrity, and boosting efficiency in labs.",
      associatedWith: "DevTechGuru Ltd.",
      imageUrl: labIcon,
      githubLink: "https://github.com/tausif1337/lims",
      liveLink: "https://lims.wyss.harvard.edu"
    },
    {
      title: "Face-Recognition Attendance System",
      developedFor: "Yoga Chandrima",
      techUsed: "AI, Python",
      description:
        "An advanced software that uses facial recognition to simplify attendance management for institutions and companies.",
      associatedWith: "DataSoft Systems Bangladesh Ltd.",
      imageUrl: faceRecognitionIcon,
      githubLink: "https://github.com/tausif1337/attendance-system",
      liveLink: "https://attendance.yogachandrima.com"
    },
    {
      title: "Enterprise Resource Planning System",
      developedFor: "Multiple Local and Foreign Companies",
      techUsed: "Laravel",
      description:
        "Web platform that integrates business processes, enhancing efficiency and seamless data handling across departments.",
      associatedWith: "DevTechGuru Ltd.",
      imageUrl: erpIcon,
      githubLink: "https://github.com/tausif1337/erp-system",
      liveLink: "https://erp.demo.devtechguru.com"
    },
    {
      title: "Content Management System (CMS)",
      developedFor: "QK Ahmad Foundation",
      techUsed: "Laravel",
      description:
        "User-centric platform for effortless creation, editing, organization, and publishing of digital content on sites/apps.",
      associatedWith: "DevTechGuru Ltd.",
      imageUrl: cmsIcon,
      githubLink: "https://github.com/tausif1337/cms",
      liveLink: "https://cms.qkahmadfoundation.com"
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