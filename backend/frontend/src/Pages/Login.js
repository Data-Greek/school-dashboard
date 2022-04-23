import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../Redux/Actions/userActions";

function Login({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Instanciation de la fonction dispatch
  const dispatch = useDispatch();

  // Chargement des paramètres de connexion
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();
  // Envoie des informations vers le backend pour authentification
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userActions(username, password));
    navigate("/");
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col sm={6} md={4}>
          <Form className="login-center py-5" onSubmit={submitHandler}>
            <h3 className="text-center py-5">Portail de connexion</h3>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Log in
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Login;
