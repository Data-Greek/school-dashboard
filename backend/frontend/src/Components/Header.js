import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Container>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/presentation">HarvestSchool</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
          <Nav>
            {/* <Nav.Link href="#s'abonner">
              <i class="fas fa-user-plus"></i> {""} S'abonner
            </Nav.Link> */}
            <Nav.Link href="/login">
              <i class="fas fa-user "> </i> {""}Se connecter
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
