import React, { useContext } from "react";
import { Image } from "react-bootstrap";

import { Context } from "../../context/Context.jsx";

export const Conversation = () => {
  const { selectedConversation, selectedProfile } = useContext(Context);
  return selectedProfile?.profilePic ? (
    <div className="profile-container d-flex align-items-center">
      <Image
        src={selectedProfile.profilePic}
        roundedCircle
        className="profile-picture"
        alt="Profile"
      />
      <h5>{selectedProfile ? selectedProfile?.name : "Anonymous"}</h5>
    </div>
  ) : (
    ""
  );
};
