import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import healthcareIcon from './assets/projects/healthcareAI.webp';

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
      pageLink: "/implant-support-system"
    },
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
