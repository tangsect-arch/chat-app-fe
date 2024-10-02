import React, { useContext } from "react";
import { Image } from "react-bootstrap";

import { Context } from "../../context/Context.jsx";

export const ChatList = ({ userInfo, index, conversationId } = props) => {
  const { setSelectedConversation } = useContext(Context);

  const handleClick = async (conversationId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/conversation/${conversationId}/messages`
      );
      const data = await response.json();
      setSelectedConversation(data.messages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="profile-container d-flex align-items-center">
      <Image
        src={userInfo.profilePic}
        roundedCircle
        className="profile-picture"
        alt="Profile"
        key={index}
      />
      <div
        className="profile-details ms-3"
        onClick={() => handleClick(conversationId)}
      >
        <h5>{userInfo ? userInfo?.name : "Anonymous"}</h5>
      </div>
    </div>
  );
};
