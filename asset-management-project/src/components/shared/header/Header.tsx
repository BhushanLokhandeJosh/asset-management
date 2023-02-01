import React from "react";
import "../../../App.css";
import "./header.css";
import "../../../styles/socialmedia-icons.css";

import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <span>Asset Management System</span>
          </div>

          <Container className="icons-social">
            <div className="media-icons">
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a href="https://www.youtube.com/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>

              <a href="https://www.twitter.com/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Header;
