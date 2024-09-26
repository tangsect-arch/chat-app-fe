import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { InputField } from "../../components/common/InputField.jsx";
import { CommonButton } from "../../components/common/Button.jsx";
import apiService from "../../components/api/apiService.js";

import "./LoginForm.css";

export const LoginForm = () => {
  const [isError, setIsError] = useState([0]);
  const [username, setUsername] = useState("");
  const [password, setPasswordValue] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const userInput = {
      username,
      password,
    };
    try {
      const result = await apiService.postData(
        `http://localhost:5000/auth/login`,
        userInput
      );
      console.log(JSON.stringify(result));
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", result.token);
      navigate("/chat");
    } catch (error) {
      setPasswordValue("");
      setUsername("");
      setIsError(true);
    }
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col className="content-box">
          <Card className="auth-form">
            <Card.Body>
              <h2>Login</h2>
              {isError === true ? <p>Invalid username/password</p> : ""}
              <Form onSubmit={handleFormSubmit}>
                <InputField
                  label="Username"
                  value={username}
                  onChange={setUsername}
                  type="string"
                  required={true}
                />
                <InputField
                  label="Password"
                  value={password}
                  onChange={setPasswordValue}
                  type="password"
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
                Don't have an account?<Link to="/register">Register</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
