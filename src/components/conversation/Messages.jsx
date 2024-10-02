import React from "react";

export const Messages = ({ conversation, index }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  let currentUserId = null;
  if (storedUser) {
    currentUserId = storedUser._id;
  }
  const isCurrentUser = conversation.senderId === currentUserId;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isCurrentUser ? "flex-end" : "flex-start",
        margin: "10px 0",
        color: "black",
      }}
    >
      <div
        style={{
          backgroundColor: isCurrentUser ? "#dcf8c6" : "#fff",
          padding: "10px",
          borderRadius: "10px",
          maxWidth: "60%",
          textAlign: "left",
          color: "black",
        }}
      >
        {conversation.message}
      </div>
    </div>
  );
};
