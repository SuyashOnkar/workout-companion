import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
  accessToken: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem('accessToken')
  );

  const login = (token: string) => {
    localStorage.setItem('accessToken', token);
    setAccessToken(token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAccessToken(null);
  };

  const isAuthenticated = () => !!accessToken;

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token && isTokenExpired(token)) {
      logout();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const isTokenExpired = (token: string) => {
  try {
    const decodedToken: any = jwtDecode(token);
    return decodedToken.exp < Date.now() / 1000;
  } catch (error) {
    return true;
  }
};
