import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyC3VJen9JvsR4viHoyGcq104pTATIOONuk",
    authDomain: "chatgram-fff8e.firebaseapp.com",
    projectId: "chatgram-fff8e",
    storageBucket: "chatgram-fff8e.appspot.com",
    messagingSenderId: "74266023247",
    appId: "1:74266023247:web:7d83baef2c9a647b20a13a",
  })
  .auth();
