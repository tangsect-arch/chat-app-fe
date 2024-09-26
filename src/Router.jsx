import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "./pages/login/LoginForm.jsx";
import { SignupForm } from "./pages/signup/SignupForm.jsx";
import { Chat } from "./pages/chat/Chat.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function Router() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/chat" element={<Chat />} />
        {/* <Route path="/account" element={<Account />} /> */}
      </Routes>
    </Container>
  );
}

export default Router;
