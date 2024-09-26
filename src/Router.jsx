import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Chat } from "./pages/Chat";
import { Home } from "./pages/Home";
import { AuthForm } from "./components/Auth/AuthForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function Router() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="*" element={<Chat />} />
      </Routes>
    </Container>
  );
}

export default Router;
