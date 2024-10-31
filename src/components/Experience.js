import React from 'react';

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="experience-timeline">
        <div className="timeline-item">
          <h3>Software Engineer</h3>
          <p>ABC Corporation</p>
          <span>2020 - Present</span>
          <p>Developed and maintained complex web applications, ensuring high performance and responsive design.</p>
        </div>
        <div className="timeline-item">
          <h3>Frontend Developer</h3>
          <p>XYZ Ltd.</p>
          <span>2018 - 2020</span>
          <p>Focused on building reusable components and front-end libraries for future use, improving overall user experience.</p>
        </div>
        {/* Add more timeline items as needed */}
      </div>
    </section>
  );
}

export default Experience;
