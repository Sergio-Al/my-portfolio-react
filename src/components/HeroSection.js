import React from "react";

const HeroSection = () => {
  return (
    <div className="header-section">
      <div className="container d-flex align-items-center header-container">
        <div className="row">
          <div className="col-xl-7 col-xxl-6">
            <h1 className="text-white hero-title">
              I’m a Nomad Tech who likes create and improve experiences
            </h1>
            <div className="hero-title">
              <a href="#working-section-page">
                <button className="btn principal-button" type="button">
                  Discover
                </button>
              </a>
              <a href="#contact-section-page">
                <button className="btn secondary-button" type="button">
                  Contact Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
