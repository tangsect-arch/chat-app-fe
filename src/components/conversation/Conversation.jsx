import React, { useContext } from "react";
import { Image } from "react-bootstrap";

import { Context } from "../../context/Context.jsx";
import { Messages } from "./Messages.jsx";

export const Conversation = () => {
  const { selectedConversation, selectedProfile } = useContext(Context);
  return selectedProfile?.profilePic ? (
    <>
      <div className="profile-container d-flex align-items-center">
        <Image
          src={selectedProfile.profilePic}
          roundedCircle
          className="profile-picture"
          alt="Profile"
        />
        <div className="profile-details ms-3">
          <h5>{selectedProfile ? selectedProfile?.name : "Anonymous"}</h5>
        </div>
      </div>
      <div>
        {selectedConversation
          ? selectedConversation.map((conversation, index) => (
              <Messages conversation={conversation} index={index} key={index} />
            ))
          : "No Conversation"}
      </div>
    </>
  ) : (
    ""
  );
};
