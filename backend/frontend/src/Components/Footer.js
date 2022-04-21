import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <div className=" footer-padding">
      <footer>
        <Container fluid="true" className="text-center py-3 ">
          <p style={{ color: "black" }}>
            <strong>Faire grandir et s'épanouir 🌱</strong>
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
