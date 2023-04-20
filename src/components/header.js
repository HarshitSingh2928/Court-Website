import React from "react";
import { Navbar, Container, Nav,  } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AppHeader() {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">College Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>

            <Nav.Link as={Link} to="/login">
              <FaUser />
              Admin Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
