import React from "react";
import ServiceItem from "./ServiceItem";
import { services } from "../utilities/pageData";

const ServicesSection = () => {
  return (
    <section
      className="d-flex justify-content-end align-items-center align-content-center service-section"
      id="services-section-page"
    >
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className=" main-section-title">My Services</h1>
            <p className="services-section-main-paragraph">
              I always look for some kind of improvement in every job I do,
              offering my clients the best of my work, always with proposals and
              suggestions based on my experience.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-betweeen">
          {services.map((service) => (
            <ServiceItem key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
