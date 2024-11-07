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
      title: "Intelligent Implant Decision Support System",
      developedFor: "Avail Ortho, a US-based startup focusing on Health AI",
      techUsed: "Django, Python, SQLite, JavaScript, jQuery, Bootstrap, HTML, CSS",
      description:
        "This system assists orthopedic doctors in making informed decisions about implants by automating the identification and segmentation of objects in X-ray images. By providing insights into trial implant length and offset, it enhances the overall medical diagnostics process.",
      associatedWith: "DevTechGuru Ltd.",
      imageUrl: healthcareIcon,
      githubLink: "https://github.com/tausif1337/intelligent-implant-system",
      liveLink: "https://availortho.com/demo"
    },
    {
      title: "DTG Smart Parking Management System",
      developedFor: "Sun Moon Star Tower",
      techUsed: "Django, Python, SQLite, JavaScript, jQuery, Bootstrap, HTML, CSS",
      description:
        "A comprehensive digital solution tailored to optimize parking operations within buildings and complexes, offering an intuitive platform for tenants and visitors to manage parking reservations, payments, and real-time availability efficiently.",
      associatedWith: "DevTechGuru Ltd.",
      imageUrl: parkingIcon,
      githubLink: "https://github.com/tausif1337/smart-parking",
      liveLink: "https://smartparking.devtechguru.com"
    },
    {
      title: "Laboratory Information Management System (LIMS)",
      developedFor: "Wyss Institute, Harvard University",
      techUsed: "Laravel, PHP, SQL, JavaScript, jQuery, AJAX, Bootstrap, HTML, CSS",
      description:
        "LIMS helps streamline sample management, automate workflows, ensure data integrity, and enhance overall efficiency in research and testing facilities.",
      associatedWith: "DevTechGuru Ltd.",
      imageUrl: labIcon,
      githubLink: "https://github.com/tausif1337/lims",
      liveLink: "https://lims.wyss.harvard.edu"
    },
    {
      title: "Facial-Recognition Based Attendance Management System",
      developedFor: "Yoga Chandrima",
      techUsed: "Face API, PHP, SQL, JavaScript, Bootstrap, HTML, CSS",
      description:
        "A sophisticated software solution that uses facial recognition technology to streamline attendance tracking and management for businesses and institutions.",
      associatedWith: "DataSoft Systems Bangladesh Ltd.",
      imageUrl: faceRecognitionIcon,
      githubLink: "https://github.com/tausif1337/attendance-system",
      liveLink: "https://attendance.yogachandrima.com"
    },
    {
      title: "Enterprise Resource Planning (ERP) System",
      developedFor: "Multiple Local and Foreign Companies",
      techUsed: "Laravel, PHP, SQL, JavaScript, jQuery, AJAX, Bootstrap, HTML, CSS",
      description:
        "A comprehensive web solution that integrates and streamlines various business processes and functions within an organization, enhancing efficiency and data management across different departments.",
      associatedWith: "DevTechGuru Ltd.",
      imageUrl: erpIcon,
      githubLink: "https://github.com/tausif1337/erp-system",
      liveLink: "https://erp.demo.devtechguru.com"
    },
    {
      title: "Content Management System (CMS)",
      developedFor: "QK Ahmad Foundation",
      techUsed: "PHP, SQL, JavaScript, jQuery, AJAX, Bootstrap, HTML, CSS",
      description:
        "A user-friendly web platform that enables easy creation, editing, organization, and publishing of digital content, such as text, images, and videos, on a website or application.",
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
