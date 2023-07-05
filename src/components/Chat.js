import React, { useContext } from "react";
import Navbar from "./Navbar";
// import { ChatEngine } from "react-chat-engine";
import { UserDataContext } from "../contexts/userDataProvidersContext";
import { PiWarning } from "react-icons/pi";
import Styles from "./Chat.module.css";

const Chat = () => {
  const user = useContext(UserDataContext);
  console.log(user);
  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        {user ? (
          <div className={Styles.profile}>
            <img src={user.photoURL} alt={user.displayName}></img>
            <h3>{user.displayName}</h3>
            <span>{user.email}</span>
          </div>
        ) : (
          "loding..."
        )}
        <div className={Styles.warning}>
          <PiWarning className={Styles.warningIcon} />
          <span>ChatEngine is Not available, because it is not Free.</span>
        </div>
        {/* <ChatEngine
        projectID="00000000-0000-0000-0000-000000000000"
        userName="adam"
        userSecret="pass1234"
      /> */}
      </div>
    </>
  );
};

export default Chat;
