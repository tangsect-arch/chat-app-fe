import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./pages/login/LoginForm.jsx";
import { ForgetPassword } from "./pages/forgetPassword/ForgetPassword.jsx";
import { SignupForm } from "./pages/signup/SignupForm.jsx";
import { Chat } from "./pages/chat/Chat.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/chat" element={<Chat />} />
      {/* <Route path="/account" element={<Account />} /> */}
    </Routes>
  );
}

export default Router;
