import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { InputField } from "../common/InputField";
import { CommonButton } from "../common/Button";

import "./LoginForm.css";

export const LoginForm = () => {
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
                  required="true"
                />
                <InputField
                  label="Password"
                  value={passwordValue}
                  onChange={setPasswordValue}
                  type="password"
                  required="true"
                />
                <CommonButton
                  className="form-button"
                  label="Login"
                  type="submit"
                  variant="primary"
                />
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
