import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

import "./ConversationList.css";

export const Profile = ({ username, profilePic } = props) => {
  {
    console.log(username);
  }
  return (
    <div className="profile-container d-flex align-items-center">
      <Image
        src={profilePic}
        roundedCircle
        className="profile-picture"
        alt="Profile"
      />
      <div className="profile-details ms-3">
        <h5>{username ? username : "Anonymous"}</h5>
      </div>
    </div>
  );
};
