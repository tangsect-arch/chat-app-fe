import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ChatList } from "./ChatList.jsx";
import { Profile } from "./Profile.jsx";
import { SearchForm } from "../common/SearchForm.jsx";

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
      <Profile name={user.name} profilePic={user.profilePic} />
      <SearchForm />
      {conversationList
        ? conversationList.map((conversation, index) => (
            <ChatList
              userInfo={conversation.otherUser}
              index={index}
              key={index}
            />
          ))
        : "No Conversation"}
    </Container>
  );
};
