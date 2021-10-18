import React from "react";

const ServiceItem = ({ service }) => {
  return (
    <div className="col-md-6 col-lg-4 d-xxl-flex justify-content-xxl-center services-section-column">
      <div className="d-flex flex-column justify-content-start services-section-card">
        <img width="123" src={service.image} />
        <h1 className="text-break services-section-card-title">
          {service.title}
        </h1>
        <p className="services-section-card-body">{service.body}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
