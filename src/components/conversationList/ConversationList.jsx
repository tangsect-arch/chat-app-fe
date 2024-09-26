import React from "react";
import { Container, Form } from "react-bootstrap";

export const ConversationList = () => {
  return (
    <Container>
      <div>Profile</div>
      <div>
        <Form className="search-input">
          <Form.Group controlId="search">
            <Form.Control type="text" placeholder="Search conversation..." />
          </Form.Group>
        </Form>
      </div>
      <div>Chat list</div>
    </Container>
  );
};
