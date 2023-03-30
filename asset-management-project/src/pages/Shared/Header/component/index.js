import React, { useEffect } from "react";
import "../../../../App.css";
import "../header.css";
import "../../../../styles/socialmedia-icons.css";

import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { logoutStart } from "../../../../utils/actions/authActions";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../routes/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logoutStart())
    navigate(ROUTES.HOME)
  }, [])

  return (
    <div>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <p>Asset Management System</p>
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
