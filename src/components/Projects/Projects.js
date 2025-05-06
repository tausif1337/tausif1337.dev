import React, { useState } from 'react';
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
      category: "Healthcare AI",
      title: "Intelligent Implant Support System",
      techUsed: "AI, React, Django",
      description: "A system aiding doctors in implant decisions by automating X-ray image analysis and providing key trial implant insights.",
      associatedWith: "DevTechGuru",
      imageUrl: healthcareIcon,
      pageLink: "/implant-support-system"
    },
    {
      category: "Parking Management",
      title: "Smart Parking Management System",
      techUsed: "AI, React, Django",
      description: "Digital solution for optimizing parking operations, allowing efficient reservation, payment, and availability tracking.",
      associatedWith: "DevTechGuru",
      imageUrl: parkingIcon,
      pageLink: "/smart-parking-system"
    },
    {
      category: "Attendance Management",
      title: "Face-Recognition Attendance System",
      techUsed: "AI, React, Django",
      description: "An advanced software that uses facial recognition to simplify attendance management for institutions and companies.",
      associatedWith: "DataSoft",
      imageUrl: faceRecognitionIcon,
      pageLink: "/face-recognition-attendance"
    },
    {
      category: "Laboratory Management",
      title: "Laboratory Management System",
      techUsed: "React, Django",
      description: "Tool for streamlining sample handling, automating workflows, ensuring data integrity, and boosting efficiency in labs.",
      associatedWith: "DevTechGuru",
      imageUrl: labIcon,
      pageLink: "/lab-management-system"
    },
    {
      category: "Business Management",
      title: "ERP System",
      techUsed: "React, Laravel",
      description: "Web platform that integrates business processes, enhancing efficiency and seamless data handling across departments.",
      associatedWith: "DevTechGuru",
      imageUrl: erpIcon,
      pageLink: "/erp-system"
    },
    {
      category: "Content Management",
      title: "Content Management System",
      techUsed: "React, Django",
      description: "User-centric platform for effortless creation, editing, organization, and publishing of digital content on sites/apps.",
      associatedWith: "DevTechGuru",
      imageUrl: cmsIcon,
      pageLink: "/cms-system"
    }
  ];

  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", ...new Set(projectData.map(project => project.category))];

  const filteredProjects = activeTab === "All" 
    ? projectData 
    : projectData.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      
      <div className="project-tabs">
        {categories.map((category, index) => (
          <span
            key={index}
            className={`category-tag${activeTab === category ? ' active' : ''}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="project-category">{project.category}</div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-tech">{project.techUsed}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <span className="project-company">{project.associatedWith}</span>
                <Link to={project.pageLink} className="project-link">
                  <FaExternalLinkAlt /> Details
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