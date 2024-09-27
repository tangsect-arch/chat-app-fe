import React from "react";
import { Form } from "react-bootstrap";

export const SearchForm = () => {
  return (
    <Form className="search-input">
      <Form.Group controlId="search">
        <Form.Control
          type="text"
          placeholder="Search conversation..."
          style={{ padding: "0.25rem", borderRadius: "0.75rem" }}
        />
      </Form.Group>
    </Form>
  );
};
