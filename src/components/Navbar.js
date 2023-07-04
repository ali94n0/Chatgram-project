import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const signoutHandler = async () => {
    await auth.signOut();
    navigate("/");
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.name}>Chatgram</div>
      <div className={Styles.logout} onClick={signoutHandler}>
        SignOut
      </div>
    </div>
  );
};

export default Navbar;
