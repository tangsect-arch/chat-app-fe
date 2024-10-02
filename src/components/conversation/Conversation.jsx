import React, { useContext } from "react";
import { Context } from "../../context/Context.jsx";

export const Conversation = () => {
  const { selectedConversation } = useContext(Context);

  console.log(`selectedConversation: ${JSON.stringify(selectedConversation)}`);

  return <div>Conversation</div>;
};
