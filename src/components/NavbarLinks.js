import React from "react";

function NavbarLinks() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-md navbar-custom fixed-top navbar-top bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            SA
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-md-end"
            id="navcol-1"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-section-page">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services-section-page">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#delivered-projects-section-page">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-section-page">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarLinks;
