import React from "react";
import AboutTrackItem from "./AboutTrackItem";
import { experiences } from "../utilities/pageData";

const AboutSection = () => {
  return (
    <section
      className="d-flex align-items-center about-section"
      id="about-section-page"
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 d-flex flex-column justify-content-center align-content-center">
            <div className="about-presentation">
              <h1 className="about-title">
                Hi there, my name is{" "}
                <span className="important-text">Sergio</span>
              </h1>
              <p className="about-paragraph">
                And I like to create modern web apps, mobile apps and gameplay
                for videogames, i want to surprise my customers with the work i
                do, and take my skills to another level.
              </p>
            </div>
          </div>
          <div className="col-xxl-7 d-flex justify-content-center about-content">
            <div className="row d-flex justify-content-start">
              {experiences.map((exp) => (
                <AboutTrackItem key={exp.years} experience={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
