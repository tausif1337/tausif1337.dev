import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import healthcareIcon from './assets/images/healthcareAI.webp';
import parkingIcon from './assets/images/parkingAI.webp';
import labIcon from './assets/images/lims.webp';
import faceRecognitionIcon from './assets/images/face-recognition.webp';
import erpIcon from './assets/images/erp.webp';
import cmsIcon from './assets/images/cms.webp';
import './assets/styles/Projects.css'; 

function Projects() {
  const projectData = [
    {
      title: "Intelligent Implant Support System       ",
      developedFor: "Avail Ortho, a US-based startup focusing on Health AI        ",
      techUsed: "AI, React, Django                                           ",
      description:
        "A system aiding doctors in implant decisions by automating X-ray image analysis and providing key trial implant insights.                ",
      associatedWith: "DevTechGuru                     ",
      imageUrl: healthcareIcon,
      pageLink: "/implant-support-system"
    },
    {
      title: "Smart Parking Mgmt System                 ",
      developedFor: "Sun Moon Star Tower                                       ",
      techUsed: "AI, React, Django                                           ",
      description:
        "Digital solution for optimizing parking operations, allowing efficient reservation, payment, and availability tracking.                   ",
      associatedWith: "DevTechGuru                     ",
      imageUrl: parkingIcon,
      pageLink: "/smart-parking-system"
    },
    {
      title: "Face-Recognition Attendance System        ",
      developedFor: "Yoga Chandrima                                            ",
      techUsed: "AI, React, Django                                           ",
      description:
        "An advanced software that uses facial recognition to simplify attendance management for institutions and companies.                      ",
      associatedWith: "DataSoft.                        ",
      imageUrl: faceRecognitionIcon,
      pageLink: "/face-recognition-attendance"
    },
    {
      title: "Laboratory Info Mgmt System               ",
      developedFor: "Wyss Institute, Harvard University                        ",
      techUsed: "React, Django                                              ",
      description:
        "Tool for streamlining sample handling, automating workflows, ensuring data integrity, and boosting efficiency in labs.                    ",
      associatedWith: "DevTechGuru                     ",
      imageUrl: labIcon,
      pageLink: "/lab-management-system"
    },
    {
      title: "ERP System                                ",
      developedFor: "Multiple Local and Foreign Companies                      ",
      techUsed: "React, Laravel                                             ",
      description:
        "Web platform that integrates business processes, enhancing efficiency and seamless data handling across departments.                      ",
      associatedWith: "DevTechGuru                     ",
      imageUrl: erpIcon,
      pageLink: "/erp-system"
    },
    {
      title: "Content Mgmt System                       ",
      developedFor: "QK Ahmad Foundation                                       ",
      techUsed: "React, Django                                              ",
      description:
        "User-centric platform for effortless creation, editing, organization, and publishing of digital content on sites/apps.                    ",
      associatedWith: "DevTechGuru                     ",
      imageUrl: cmsIcon,
      pageLink: "/cms-system"
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
                <Link to={project.pageLink} className="project-link">
                  <FaExternalLinkAlt /> Project Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
