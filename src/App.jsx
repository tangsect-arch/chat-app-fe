import React from "react";
import Router from "./Router";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
import { NavBar } from "./components/NavBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <NavBar />
      <Router />
    </Container>
  );
}

export default App;
