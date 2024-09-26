import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { InputField } from "../../components/common/InputField.jsx";
import { CommonButton } from "../../components/common/Button.jsx";
import apiService from "../../components/api/apiService.js";

import "../AuthForm.css";

export const ForgetPassword = () => {
  const [isError, setIsError] = useState([0]);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const userInput = {
      email,
      code,
    };
    try {
      const result = await apiService.postData(
        `http://localhost:5000/auth/login`,
        userInput
      );
      console.log(JSON.stringify(result));
      navigate("/login");
    } catch (error) {
      setPasswordValue("");
      setUsername("");
      setIsError(true);
    }
  };

  return (
    <Container className="login-container">
      <Card className="auth-form">
        <Card.Body>
          <h2>Forget Password</h2>
          {isError === true ? <p>Invalid username/password</p> : ""}
          <Form onSubmit={handleFormSubmit}>
            <InputField
              label="Email"
              value={email}
              onChange={setEmail}
              type="string"
              required={true}
            />
            <InputField
              label="Code"
              value={code}
              onChange={setCode}
              type="string"
              required={true}
            />
            <CommonButton
              className="form-button"
              label="Login"
              type="submit"
              variant="primary"
            />
          </Form>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};
