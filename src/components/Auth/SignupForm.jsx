import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { InputField } from "../common/InputField";
import { CommonButton } from "../common/Button";

import "./SignupForm.css";

export const SignupForm = () => {
  const [usernameValue, setUsernameValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const userInput = {
      usernameValue,
      nameValue,
      emailAddress,
      passwordValue,
      phoneValue,
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
                  label="Name"
                  value={nameValue}
                  onChange={setNameValue}
                  type="string"
                  required="true"
                />
                <InputField
                  label="username"
                  value={usernameValue}
                  onChange={setUsernameValue}
                  type="string"
                  required="true"
                />
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
                <InputField
                  label="Phone"
                  value={phoneValue}
                  onChange={setPhoneValue}
                  type="tel"
                  required="true"
                />
                <CommonButton
                  className="form-button"
                  label="Signup"
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
