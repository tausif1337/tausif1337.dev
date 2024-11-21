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

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projectData.map(project => project.category))];

  const filteredProjects = selectedCategory === "All" 
    ? projectData 
    : projectData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="category-filter">
        <label htmlFor="category-select">Filter by Category: </label>
        <select 
          id="category-select" 
          value={selectedCategory} 
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
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