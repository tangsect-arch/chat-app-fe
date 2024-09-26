import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { InputField } from "../../components/common/InputField.jsx";
import { CommonButton } from "../../components/common/Button.jsx";
import apiService from "../../components/api/apiService.js";

import "./SignupForm.css";

export const SignupForm = () => {
  const [username, setUsernameValue] = useState("");
  const [name, setNameValue] = useState("");
  const [email, setEmailAddress] = useState("");
  const [password, setPasswordValue] = useState("");
  const [phone, setPhoneValue] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const userInput = {
      username,
      name,
      email,
      password,
      phone,
      gender,
    };

    try {
      const result = await apiService.postData(
        `http://localhost:5000/auth/signup`,
        userInput
      );
      navigate("/login");
    } catch (error) {}
  };

  return (
    <Container className="login-container">
      <Card className="auth-form">
        <Card.Body>
          <h2>Signup</h2>
          <Form onSubmit={handleFormSubmit}>
            <InputField
              label="Name"
              value={name}
              onChange={setNameValue}
              type="string"
              required={true}
            />
            <InputField
              label="username"
              value={username}
              onChange={setUsernameValue}
              type="string"
              required={true}
            />
            <InputField
              label="Email Address"
              value={email}
              onChange={setEmailAddress}
              type="email"
              required={true}
            />
            <InputField
              label="Password"
              value={password}
              onChange={setPasswordValue}
              type="password"
              required={true}
            />
            <InputField
              label="Phone"
              value={phone}
              onChange={setPhoneValue}
              type="tel"
              required={true}
            />
            <InputField
              label="Gender"
              value={gender}
              onChange={setGender}
              type="string"
              required={true}
            />
            <CommonButton
              className="form-button"
              label="Signup"
              type="submit"
              variant="primary"
            />
          </Form>
          <p>
            Already have an account?<Link to="/login">Signin</Link>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};
