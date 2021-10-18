import React from "react";
import facebookIcon from "../assets/images/facebook-icon.png";
import twitterIcon from "../assets/images/twitter-icon.png";
import instagraIcon from "../assets/images/instagram-icon.png";
import githubIcon from "../assets/images/github-icon.png";

const FooterSection = () => {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center footer-section">
      <div className="container">
        <div className="row justify-content-center">
          <a
            className="social-link"
            href="https://facebook.com/anomadtech"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookIcon} alt="social" />
          </a>
          <a
            className="social-link"
            href="https://github.com/Sergio-Al"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="social" />
          </a>
          <a
            className="social-link"
            href="https://twitter.com/sergio_ml900"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterIcon} alt="social" />
          </a>
          <a
            className="social-link"
            href="https://www.instagram.com/sergioalejandro900/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagraIcon} alt="social" />
          </a>
        </div>
        <div className="row justify-content-center text-center footer-section-copyright">
          <p className="copyright">SAML © 2021</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
