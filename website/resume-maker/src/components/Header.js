import { render } from "@testing-library/react";
import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";

function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        style={{ height: "4rem" }}
      >
        <Container>
          <Navbar.Brand href="home">Resume Maker</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="spaced-link" href="/home">
                Home
              </Nav.Link>
              <Nav.Link className="spaced-link" href="/resume">
                Generate Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
