import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { ChatList } from "./ChatList.jsx";
import { Profile } from "./Profile.jsx";

import apiService from "../api/apiService.js";

export const ConversationList = () => {
  const [user, setUser] = useState("");
  const [conversationList, setConversationList] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
    const fetchUser = async () => {
      try {
        const response = await apiService.getData(
          `http://localhost:5000/conversation/${storedUser._id}`
        );
        setConversationList(response);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, []);

  {
    user;
  }
  return (
    <Container>
      <Profile username={user.username} profilePic={user.profilePic} />
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
