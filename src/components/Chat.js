import React from "react";
import Navbar from "./Navbar";
import { ChatEngine } from "react-chat-engine";

const Chat = () => {
  return (
    <div>
      <Navbar />
      <ChatEngine
        projectID="00000000-0000-0000-0000-000000000000"
        userName="adam"
        userSecret="pass1234"
      />
    </div>
  );
};

export default Chat;
