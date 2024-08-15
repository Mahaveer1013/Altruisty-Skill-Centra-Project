import React, { createContext, useContext, useState, useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
    if (loggedInStatus) {
      const userData = JSON.parse(localStorage.getItem('user'));
      setUser(userData);
    }

    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result && result.user) {
          const userData = {
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
          };
          login(userData);
        }
      } catch (error) {
        console.error('Error handling redirect result', error);
      }
    };

    handleRedirectResult();
  }, []);

  const login = (userData) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(userData));
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
