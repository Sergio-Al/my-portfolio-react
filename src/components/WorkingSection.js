import React from "react";
import currentTech from "../assets/images/current-tech-imagespng.png";

const WorkingSection = () => {
  return (
    <section className="working-section" id="working-section-page">
      <div className="row">
        <div className="col-lg-6 working-section-column-image"></div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <div className="working-section-content">
            <h1 className="main-section-title">Working With Me</h1>
            <p>
              I am a great a great communicator and love to invest the necessary
              to understand the problem very well, then create the best product
              possible
              <br />
            </p>
            <h4>DESIGN TOOLS</h4>
            <p>
              I like to design my pages with Figma and Adobe Photoshop as my
              principal tools.
              <br />
            </p>
            <h4>
              PRINCIPAL DEVELOPMENT TOOLS
              <br />
            </h4>
            <p>
              My principal workflow stack in web development currently is MEVN,
              but i’m practicing and learning MERN as well.
              <br />
            </p>
            <h4>
              TECH THAT I KNOW
              <br />
            </h4>
            <p>
              Currently i can work very well with the following technologies
              <br />
            </p>
            <div>
              <img className="img-fluid" src={currentTech} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;
