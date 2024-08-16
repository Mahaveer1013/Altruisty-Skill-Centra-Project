import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchCurrentUser } from './api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isSidebar, setIsSidebar] = useState(null);
  const [flash, setFlash] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      const data = fetchCurrentUser();
      data && setUser(data) && setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  
  const value = { isLoggedIn, user, setUser, setIsLoggedIn, isSidebar, setIsSidebar, flash, setFlash }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
