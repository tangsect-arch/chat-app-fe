import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { InputField } from "../common/InputField";
import { CommonButton } from "../common/Button";

import "./AuthForm.css";

export const AuthForm = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const userInput = {
      emailAddress,
      passwordValue,
    };

    console.log(userInput);
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col className="content-box">
          <Card className="auth-form">
            <Card.Body>
              <h2>Login</h2>
              <Form onSubmit={handleFormSubmit}>
                <InputField
                  label="Email Address"
                  value={emailAddress}
                  onChange={setEmailAddress}
                  type="email"
                  required
                />
                <InputField
                  label="Password"
                  value={passwordValue}
                  onChange={setPasswordValue}
                  type="password"
                  required
                />
                <CommonButton label="Login" type="submit" variant="primary" />
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
