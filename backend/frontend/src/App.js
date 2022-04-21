import { Container, Row, Col } from "react-bootstrap";
import React from "react";

// Dashboard page
import Dashboard from "./Pages/Dashboard";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <Container fluid="true" className="py-5">
      <Header />
      <main>
        <Dashboard />
      </main>
      <Footer />
    </Container>
  );
}

export default App;
