import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import alumni from "../Images/newImg.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I have worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Students Alumni Interaction Portal */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alumni}
              isBlog={false}
              title="Students Alumni Interaction Portal"
              description="A web application that connects students with alumni to foster meaningful interactions, career guidance, and mentorship. Built using React, Node.js, and MongoDB with a backend focus."
              ghLink="https://github.com/SRIDHARAN-G-2881"
              demoLink="" // if you have a hosted demo link, add it here
            />
          </Col>

          {/* Smart Event Calendar */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alumni}
              isBlog={false}
              title="Smart Event Calendar"
              description="A calendar-based event scheduling application similar to Google Calendar. Allows users to add, view, and manage events on specific dates with an interactive UI. Built with React and Tailwind CSS."
              ghLink="https://github.com/SRIDHARAN-G-2881"
              demoLink="https://calendar-sridharan.netlify.app/"
            />
          </Col>

          {/* Skill Team Web Application */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alumni}
              isBlog={false}
              title="Skill Team Web Application"
              description="A full-stack web application that enables students to register for Night Skills and Day Skills, ensuring prevention of duplicate registrations across semesters. Built using React, Node.js, and MongoDB."
              ghLink="https://github.com/SRIDHARAN-G-2881"
              demoLink="" // if you have a hosted demo link, add it here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
