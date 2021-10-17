import React from "react";
import { projects } from "../utilities/pageData";
import DeliveredProjectItem from "./DeliveredProjectItem";

const DeliveredProjectsSection = () => {
  return (
    <section
      className="delivered-projects-section-page"
      id="delivered-projects-section-page"
    >
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-column justify-content-center delivered-container">
            <h1 className="text-center main-section-title">
              Delivered Projects
            </h1>
            <p className="delivered-project-paragraph">
              Listed Below are the work that i delivered to my customers, i have
              not included some intranet projects because the company wants to
              keep it private.
            </p>
            {projects.map((project) => (
              <DeliveredProjectItem key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveredProjectsSection;
