import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

import "./ConversationList.css";

export const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="profile-container d-flex align-items-center">
      <Image
        src={user.profilePic}
        roundedCircle
        className="profile-picture"
        alt="Profile"
      />
      <div className="profile-details ms-3">
        <h5>{user ? user.username : "Anonymous"}</h5>
      </div>
    </div>
  );
};
