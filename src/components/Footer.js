import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h6>Code. Create. Innovated</h6>
        
        </Col>
        <Col md="6" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SRIDHARAN-G-2881"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
