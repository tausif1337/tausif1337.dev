import React from "react";
import Education from "../Education/Education";
import Courses from "../Courses/Courses";
import './assets/styles/ContainerComponent.css';

function ContainerComponent() {
  return (
    <div className="row main-container">
      <div className="col-sm-6">
        <Education />
      </div>
      <div className="col-sm-6">
        <Courses />
      </div>
    </div>
  );
}

export default ContainerComponent;