import React from "react";
import otherTech from "../assets/images/learned-tech-icon-imagepng.png";

const OtherTechSection = () => {
  return (
    <section
      className="d-flex align-items-center other-tech-section"
      id="other-tech-section-page"
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="other-tech-section-content">
              <h1 className="main-section-title">Other Technologies Learned</h1>
              <p>
                Throughout my career as a software developer I have learned and
                worked with many technologies that I have not currently
                practiced much, but with practice I can get comfortable with
                each of them.
              </p>
              <div>
                <img className="img-fluid" src={otherTech} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherTechSection;
