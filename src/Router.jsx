import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/Auth/LoginForm";
import { SignupForm } from "./components/Auth/SignupForm";
import { Chat } from "./pages/Chat";
import { Home } from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function Router() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/register" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Chat />} />
      </Routes>
    </Container>
  );
}

export default Router;
