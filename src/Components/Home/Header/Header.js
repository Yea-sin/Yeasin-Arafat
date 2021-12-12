import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="fixed-top navbar-styles py-4" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h4 className="logo-text">
            Yeasin <span className="text-secondary">Arafat</span>
          </h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto nav-menu">
            <Nav.Link active href="#home">
              RESUME
            </Nav.Link>
            <Nav.Link active href="#link">
              ABOUT
            </Nav.Link>
            <Nav.Link active href="#link">
              PROJECTS
            </Nav.Link>
            <Nav.Link active href="#link">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
