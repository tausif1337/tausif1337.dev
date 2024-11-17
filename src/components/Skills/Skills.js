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
        <div className="card">
          <FaPython size={40} color="#306998" />
          <h3>Python</h3>
        </div>
        <div className="card">
          <SiDjango size={40} color="#092E20" />
          <h3>Django</h3>
        </div>
        <div className="card">
          <FaJsSquare size={40} color="#F7DF1E" />
          <h3>JavaScript</h3>
        </div>
        <div className="card">
          <FaReact size={40} color="#61DAFB" />
          <h3>React</h3>
        </div>
        <div className="card">
          <SiJquery size={40} color="#0769AD" />
          <h3>jQuery</h3>
        </div>
        <div className="card">
          <FaPhp size={40} color="#777BB4" />
          <h3>PHP</h3>
        </div>
        <div className="card">
          <SiLaravel size={40} color="#FF2D20" />
          <h3>Laravel</h3>
        </div>
        <div className="card">
          <FaJava size={40} color="#007396" />
          <h3>Java</h3>
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
          <FaBootstrap size={40} color="#06B6D4" />
          <h3>Bootstrap</h3>
        </div>
        <div className="card">
          <FaDatabase size={40} color="#F29111" />
          <h3>MySQL</h3>
        </div>
        <div className="card">
          <FaGitAlt size={40} color="#F05032" />
          <h3>Git</h3>
        </div>
        <div className="card">
          <FaDocker size={40} color="#2496ED" />
          <h3>Docker</h3>
        </div>
        <div className="card">
          <FaAws size={40} color="#FF9900" />
          <h3>AWS</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;