import React, { createContext, useContext, useState, useEffect } from 'react';
import api from './api/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isSidebar, setIsSidebar] = useState(null);
  const [flash, setFlash] = useState(null); // eg: ['message successfull', 'success']

  const checkUser = () => {
    api.get('/user')
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
        setIsLoggedIn(true);
      }).catch(() => {
      })
  }
  
  useEffect(() => {
   
    if (document.cookie.includes('accessToken') || document.cookie.includes('refreshToken')) {
      checkUser();
    }
  }, []);


  const value = { isLoggedIn, user, setUser, setIsLoggedIn, isSidebar, setIsSidebar, flash, setFlash, checkUser }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
