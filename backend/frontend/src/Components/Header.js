import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/Actions/userActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Instanciation de la fonction de redirection
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fonction de déconnexion
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

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
          <Navbar.Brand href="/"> HarvestSchool 🎓</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>

          {/* Logique conditionnelle en cas d'utilisateur connecté */}
          {userInfo ? (
            <NavDropdown
              title={"Bonjour" + " " + userInfo.username}
              id="username"
            >
              <NavDropdown.Item onClick={logoutHandler}>
                <i class="fas fa-sign-out-alt"></i> Se déconnecter
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to="/">
              <Nav.Link eventKey={2}>
                <i class="fas fa-user "> </i> Se connecter
              </Nav.Link>
            </LinkContainer>
          )}
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
