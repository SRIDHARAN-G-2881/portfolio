import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import Lottie from "lottie-react";
// import myResume from "../../../public/SRIDHARAN_G-Resume.pdf"
import webdevAnimation from "../../Assets/webdev.json";

function ResumeNew() {
  return (
    <div className="relative">
      <Container fluid className="resume-section relative min-h-screen flex items-center">
        <Particle />

        <Row className="flex flex-col md:flex-row items-center w-full px-6 py-10">
          {/* Animation Side */}
          <Col
            md={6}
            className="flex justify-center items-center mb-8 md:mb-0"
          >
            <Lottie
              animationData={webdevAnimation}
              loop
              autoplay
              style={{
                width: "100%",
                maxWidth: "400px",
                opacity: 0.9,
                filter: "drop-shadow(0 0 15px rgba(255,255,255,0.2))",
              }}
            />
          </Col>

          {/* Content Side */}
          <Col
            md={6}
            className="text-center md:text-left flex flex-col justify-center text-white"
          >
            <h1 className="text-4xl font-bold mb-4">My Resume</h1>
            <p className="text-lg leading-relaxed opacity-90 mb-6">
              Download my updated resume to explore my{" "}
              <span className="text-purple-400 font-semibold">skills</span>,{" "}
              <span className="text-purple-400 font-semibold">projects</span>, and{" "}
              <span className="text-purple-400 font-semibold">achievements</span>{" "}
              in software development.
            </p>

  <div className="flex justify-center md:justify-start">
  <a href="/SRIDHARAN_G-Resume.pdf" download="SRIDHARAN_G-Resume.pdf">
    <Button
      variant="primary"
      className="px-5 py-3 text-lg shadow-lg rounded-lg"
    >
      <AiOutlineDownload size={22} />
      &nbsp;Download CV
    </Button>
  </a>
</div>


          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
