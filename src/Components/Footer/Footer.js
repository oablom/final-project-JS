import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-leftSide">
          <h1 className="logo">Sportify</h1>
        </div>
        <div className="footer-rightSide">
          <div className="footer-div-connect">
            <h3>Connect</h3>
            {/* line */}
            <svg
              width="264"
              height="1"
              viewBox="0 0 264 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0.5H326" stroke="black" />
            </svg>
            {/* line */}
            <FontAwesomeIcon
              icon={faTwitterSquare}
              className="social-media-link"
            />
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="social-media-link"
            />
            <FontAwesomeIcon icon={faInstagram} className="social-media-link" />

            <span className="mail">info@sportify.com</span>
          </div>
          <div className="footer-div-findus">
            <h3>Find us</h3>
            {/* line */}
            <svg
              width="264"
              height="1"
              viewBox="0 0 264 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0.5H326" stroke="black" />
            </svg>
            {/* line */}
            <h6>
              Sportify Inc. <br />
              1324 Aviation Way <br />
              Los Angeles, CA
            </h6>
            <span className="phone">213-829-2154</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
