import React from "react";

const DeliveredProjectItem = ({ project }) => {
  return (
    <div className="delivered-project-item">
      <img
        className="img-fluid delivered-project-item-image"
        src={project.image}
        alt="projects"
      />
      <p>
        <strong>For: </strong>
        {project.title}
        <strong> Project: </strong>
        {project.description}
      </p>
    </div>
  );
};

export default DeliveredProjectItem;
