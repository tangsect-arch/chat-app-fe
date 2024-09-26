import React from "react";
import { Container, Form } from "react-bootstrap";
import { ChatList } from "./ChatList.jsx";
import { Profile } from "./Profile.jsx";

export const ConversationList = () => {
  return (
    <Container>
      <Profile />
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
      <ChatList />
    </Container>
  );
};
