import { render } from "@testing-library/react";
import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoMarkGithub } from "react-icons/go";
import "./Header.css";

function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        style={{ height: "8vh" }}
      >
        <Container>
          <Navbar.Brand href="home">Resume Maker</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="spaced-link" href="/resume">
                Generate Resume
              </Nav.Link>
              <Nav.Link className="spaced-link" href="/howto">
                Upload Template
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/BrainyShadow/resume-maker">
                <GoMarkGithub className="nav-logo" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
