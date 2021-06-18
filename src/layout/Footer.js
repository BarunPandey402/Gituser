import React from "react";
import { Container } from "reactstrap";

export default function Footer() {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-info text-white text-uppercase fixed-bottom p-3"
    >
      PandeyMedia search App with Firebase
    </Container>
  );
}
