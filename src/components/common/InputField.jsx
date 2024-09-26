import React from "react";
import { Form } from "react-bootstrap";

export const InputField = ({ label, value, onChange, type, required }) => {
  return (
    <Form.Group controlId={`formBasic${label}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label.toLowerCase()}`}
        required={required}
      />
    </Form.Group>
  );
};
