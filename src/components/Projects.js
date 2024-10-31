import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="card">
          <h3>Portfolio Website</h3>
          <p>A personal website to showcase my skills, experience, and projects.</p>
          <div className="project-links">
            <a href="https://github.com/tausif1337/portfolio" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
            <a href="https://tausif1337.com" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live</a>
          </div>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
}

export default Projects;
