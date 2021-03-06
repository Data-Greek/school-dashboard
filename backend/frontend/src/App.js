import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Dashboard page
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";

function App() {
  return (
    <Container fluid="true" className="py-5">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
