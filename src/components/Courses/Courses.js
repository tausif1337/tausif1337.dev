import React from "react";
import './assets/styles/Courses.css';

function Courses() {
  const courses = [
    {
      name: "Advanced React and Redux",
      date: "2023",
      description: "Comprehensive coverage of React development and state management."
    },
    // More courses entries...
  ];

  return (
    <section className="section">
      <h2>Courses</h2>
      <div className="grid">
        {courses.map((course, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{course.name}</h3>
            <span className="card-duration">{course.date}</span>
            <p className="card-description">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
