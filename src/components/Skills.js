import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaDatabase } from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="card">
          <FaReact size={40} color="#61DAFB" />
          <h3>React</h3>
        </div>
        <div className="card">
          <FaNodeJs size={40} color="#339933" />
          <h3>Node.js</h3>
        </div>
        <div className="card">
          <FaHtml5 size={40} color="#E34F26" />
          <h3>HTML5</h3>
        </div>
        <div className="card">
          <FaCss3Alt size={40} color="#1572B6" />
          <h3>CSS3</h3>
        </div>
        <div className="card">
          <FaPython size={40} color="#306998" />
          <h3>Python</h3>
        </div>
        <div className="card">
          <FaDatabase size={40} color="#F29111" />
          <h3>Databases</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;
