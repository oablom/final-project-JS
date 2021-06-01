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
              width="16.5rem"
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

            <span className="mail">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 7H7C5.075 7 3.5175 8.575 3.5175 10.5L3.5 31.5C3.5 33.425 5.075 35 7 35H35C36.925 35 38.5 33.425 38.5 31.5V10.5C38.5 8.575 36.925 7 35 7ZM35 31.5H7V14L21 22.75L35 14V31.5ZM21 19.25L7 10.5H35L21 19.25Z"
                  fill="black"
                />
              </svg>
              info@sportify.com
            </span>
          </div>
          <div className="footer-div-findus">
            <h3>Find us</h3>
            {/* line */}
            <svg
              className="phone-mail"
              width="16.5rem"
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
            <span className="phone">
              <svg
                className="phone-mail"
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.43556 12.9487C8.99556 17.6528 13.12 21.4926 18.1511 23.9028L22.0622 20.2459C22.5422 19.7971 23.2533 19.6475 23.8756 19.847C25.8667 20.462 28.0178 20.7944 30.2222 20.7944C31.2 20.7944 32 21.5424 32 22.4567V28.2578C32 29.172 31.2 29.92 30.2222 29.92C13.5289 29.92 0 17.2705 0 1.66222C0 0.748001 0.8 0 1.77778 0H8C8.97778 0 9.77778 0.748001 9.77778 1.66222C9.77778 3.74001 10.1333 5.73468 10.7911 7.59637C10.9867 8.17815 10.8444 8.82641 10.3467 9.29184L6.43556 12.9487Z"
                  fill="black"
                />
              </svg>
              213-829-2154
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
