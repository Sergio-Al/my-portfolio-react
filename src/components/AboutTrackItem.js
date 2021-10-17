import React from "react";

const AboutTrackItem = ({ experience }) => {
  console.log(experience);
  return (
    <div className="col-lg-6">
      <div className="about-track">
        <h4 className="important-text">{experience.years}</h4>
        <h4>{experience.title}</h4>
        <p>{experience.body}</p>
      </div>
    </div>
  );
};

export default AboutTrackItem;
