import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "1.8", fontSize: "1.05rem" }}>
            With a <b className="purple">Bachelor of Engineering in Computer Science and Business Systems</b>, 
            I have a comprehensive understanding of essential computer science principles and hands-on experience in several technical areas.
            <br /><br />
            My skills include proficiency in <b className="purple">data structures, algorithms</b>, and core programming languages like <b className="purple">Java, C, and JavaScript</b>. 
            I am skilled in <b className="purple">web development</b>, working with frontend technologies such as <b className="purple">React, HTML, CSS, and Tailwind</b>, 
            as well as backend tools like <b className="purple">Node.js</b>.
           
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
