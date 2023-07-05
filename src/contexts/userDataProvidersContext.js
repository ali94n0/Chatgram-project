import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const UserDataContext = createContext();
const UserDataProvidersContext = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((data) => {
      setUser(data);
      setLoading(false);
      if (user) navigate("/chat");
    });
  }, [user, navigate]);

  return (
    <UserDataContext.Provider value={user}>
      {!loading && children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvidersContext;
