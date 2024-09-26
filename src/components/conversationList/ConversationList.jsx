import React from "react";
import { Container, Form } from "react-bootstrap";

export const ConversationList = () => {
  return (
    <Container>
      <div>Profile</div>
      <div>
        <Form className="search-input">
          <Form.Group controlId="search">
            <Form.Control
              type="text"
              placeholder="Search conversation..."
              style={{ padding: "0.25rem", borderRadius: "0.75rem" }}
            />
          </Form.Group>
        </Form>
      </div>
      <div>Chat list</div>
    </Container>
  );
};
