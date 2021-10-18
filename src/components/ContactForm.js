import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormDisabled, setFormDisabled] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(`sending name ${name}, email: ${email}, message: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
    setFormDisabled(false);
  };
  return (
    <form
      className="d-flex flex-column justify-content-around contact-form"
      onSubmit={sendMessage}
    >
      <div className="contact-form-input-group">
        <label className="contact-form-label">Name</label>
        <input
          className="contact-form-input"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="contact-form-input-group">
        <label className="contact-form-label">E-Mail</label>
        <input
          className="contact-form-input"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="contact-form-input-group">
        <label className="contact-form-label">Message</label>
        <textarea
          className="contact-form-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button
        disabled={isFormDisabled}
        className="contact-form-button"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
