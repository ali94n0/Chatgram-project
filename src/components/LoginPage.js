import React from "react";
import googleLogo from "../assets/google.svg";
import Styles from "./Login.module.css";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

const LoginPage = () => {
  return (
    <div className={Styles.loginPage}>
      <div className={Styles.loginCard}>
        <h2>Login To Chatgram</h2>
        <div
          className={Styles.button}
          onClick={() => {
            signInWithRedirect(auth, new GoogleAuthProvider());
          }}
        >
          <img src={googleLogo} alt="google"></img>
          <span>login with Google</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
