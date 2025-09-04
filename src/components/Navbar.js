import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { motion } from "framer-motion";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  // Animation variants for buttons
  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky bg-gray-800 shadow-lg" : "navbar bg-gray-900"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
          className="border-none focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto justify-content-center text-center" defaultActiveKey="#home">
            <Nav.Item>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                  className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition-colors duration-200 flex items-center"
                >
                  <AiOutlineHome className="mr-1 mb-0.5" /> Home
                </Nav.Link>
              </motion.div>
            </Nav.Item>

            <Nav.Item>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                  className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition-colors duration-200 flex items-center"
                >
                  <AiOutlineUser className="mr-1 mb-0.5" /> About
                </Nav.Link>
              </motion.div>
            </Nav.Item>

            <Nav.Item>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                  className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition-colors duration-200 flex items-center"
                >
                  <AiOutlineFundProjectionScreen className="mr-1 mb-0.5" /> Projects
                </Nav.Link>
              </motion.div>
            </Nav.Item>

            <Nav.Item>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                  className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition-colors duration-200 flex items-center"
                >
                  <CgFileDocument className="mr-1 mb-0.5" /> Resume
                </Nav.Link>
              </motion.div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
