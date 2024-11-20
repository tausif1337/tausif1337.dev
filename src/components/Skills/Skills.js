import React from "react";
import "./assets/styles/Skills.css";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaPhp,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaDatabase,
  FaJsSquare,
  FaBootstrap,
} from "react-icons/fa";
import { SiDjango, SiLaravel, SiJquery } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skills-card">
          <FaPython size={40} color="#306998" />
          <h6>Python</h6>
        </div>
        <div className="skills-card">
          <SiDjango size={40} color="#092E20" />
          <h6>Django</h6>
        </div>
        <div className="skills-card">
          <FaJsSquare size={40} color="#F7DF1E" />
          <h6>JavaScript</h6>
        </div>
        <div className="skills-card">
          <FaReact size={40} color="#61DAFB" />
          <h6>React</h6>
        </div>
        <div className="skills-card">
          <SiJquery size={40} color="#0769AD" />
          <h6>jQuery</h6>
        </div>
        <div className="skills-card">
          <FaPhp size={40} color="#777BB4" />
          <h6>PHP</h6>
        </div>
        <div className="skills-card">
          <SiLaravel size={40} color="#FF2D20" />
          <h6>Laravel</h6>
        </div>
        <div className="skills-card">
          <FaJava size={40} color="#007396" />
          <h6>Java</h6>
        </div>
        <div className="skills-card">
          <FaHtml5 size={40} color="#E34F26" />
          <h6>HTML5</h6>
        </div>
        <div className="skills-card">
          <FaCss3Alt size={40} color="#1572B6" />
          <h6>CSS3</h6>
        </div>
        <div className="skills-card">
          <FaBootstrap size={40} color="#06B6D4" />
          <h6>Bootstrap</h6>
        </div>
        <div className="skills-card">
          <FaDatabase size={40} color="#F29111" />
          <h6>MySQL</h6>
        </div>
        <div className="skills-card">
          <FaGitAlt size={40} color="#F05032" />
          <h6>Git</h6>
        </div>
        <div className="skills-card">
          <FaDocker size={40} color="#2496ED" />
          <h6>Docker</h6>
        </div>
        <div className="skills-card">
          <FaAws size={40} color="#FF9900" />
          <h6>AWS</h6>
        </div>
      </div>
    </section>
  );
}

export default Skills;