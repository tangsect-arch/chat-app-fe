import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

import "./ConversationList.css";

export const Profile = ({ name, profilePic } = props) => {
  return (
    <div className="profile-container d-flex align-items-center">
      <Image
        src={profilePic}
        roundedCircle
        className="profile-picture"
        alt="Profile"
      />
      <div className="profile-details ms-3">
        <h5>{name ? name : "Anonymous"}</h5>
      </div>
    </div>
  );
};
