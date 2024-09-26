import React from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Container>
      <Link to="/">Chat App</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/home">Home</Link>
      <Link to="/auth">Auth</Link>
    </Container>
  );
};
