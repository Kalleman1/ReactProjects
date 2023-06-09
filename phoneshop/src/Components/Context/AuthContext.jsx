import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import StartFirebase from "../../Components/firebaseConfig/Index";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { auth } = StartFirebase();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const loginUser = (loggedInUser) => {
    setUser(loggedInUser);
    console.log(user);
  };

  const logoutUser = () => {
    signOut(auth);
    setUser(null);
  };

  if (loading) {
    // Render a loading spinner or skeleton component while checking the authentication state
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
