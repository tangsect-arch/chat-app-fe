import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Conversation } from "../../components/conversation/Conversation";
import {ConversationList} from "../../components/conversationList/ConversationList.jsx"
import "./Chat.css";

export const Chat = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={4} className="border-end pe-3">
            <ConversationList />
          </Col>
          <Col xs={8}>
            <Conversation />
          </Col>
        </Row>
      </Container>
    </>
  );
};
