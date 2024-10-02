import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import {} from "../../context/ChatContext.jsx";
import { Conversation } from "../../components/conversation/Conversation.jsx";
import { ConversationList } from "../../components/ConversationList/ConversationList.jsx";
import { Context } from "../../context/Context.jsx";
import "./Chat.css";

export const Chat = () => {
  const [selectedConversation, setSelectedConversation] = useState([]);
  return (
    <Context.Provider value={{ selectedConversation, setSelectedConversation }}>
      <Container>
        <div className="chat-container border bg-light-blue">
          <Row>
            <Col xs={4} className="border-end pe-3">
              <ConversationList />
            </Col>
            <Col xs={8}>
              <Conversation />
            </Col>
          </Row>
        </div>
      </Container>
    </Context.Provider>
  );
};
