import React from "react";
import './assets/styles/Achievements.css';

function Achievements() {
  const achievements = [
    {
      name: "DIU App Contest 2017",
      description: "Developed AR Doctor, an Augment Reality based natural feature detection and tracking system which can analyze faces and detect skin diseases."
    },
    {
      name: "Annual SECS Awards 2017",
      description: "Awarded for outstanding project development and contributions."
    },
  ];

  return (
    <section className="section">
      <h2>Achievements</h2>
      <div className="grid">
        {achievements.map((ach, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{ach.name}</h3>
            <p className="card-description">{ach.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
