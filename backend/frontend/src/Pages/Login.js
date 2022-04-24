import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../Redux/Actions/userActions";

// Error message component
import Message from "../Components/Message";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Chargement des paramètres de connexion
  const userLogin = useSelector((state) => state.userLogin);
  const { error, userInfo } = userLogin;

  // Instanciation de la fonction dispatch (POST Method)
  const dispatch = useDispatch();

  // Instanciation de la fonction de redirection
  const navigate = useNavigate();

  // Envoie des informations vers le backend pour authentification
  const submitHandler = (e) => {
    // POST Request (authentification)
    e.preventDefault();
    dispatch(userActions(username, password));
  };

  // Redirection des utilisateurs authentifiés
  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [userInfo, navigate]);

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col sm={6} md={4}>
          {/* FORMULAIRE */}
          <Form className="login-center py-5" onSubmit={submitHandler}>
            <h3 className="text-center py-5">Portail de connexion</h3>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Connexion
            </Button>
          </Form>
          {/* ERROR MESSAGE */}
          {error && (
            <Message variant="danger">
              E-mail ou mot de passe incorrect(s)
            </Message>
          )}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Login;
