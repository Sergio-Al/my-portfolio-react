import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact-section-page">
      <div className="row">
        <div className="col-lg-6 contact-section-column-image"></div>
        <div className="col-lg-6 contact-section-column-form d-flex align-items-center">
          <div className="contact-form-column">
            <h1 className="main-section-title">Contact Me</h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
