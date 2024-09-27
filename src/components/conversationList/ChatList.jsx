import React from "react";
import { Image } from "react-bootstrap";

export const ChatList = ({
  userInfo,
  index,
  conversationId,
  handleClick,
} = props) => {
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
