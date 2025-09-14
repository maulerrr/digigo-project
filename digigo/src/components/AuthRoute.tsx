import React from 'react';
import { Navigate } from 'react-router-dom';

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Redirect to login if no token is found
    return <Navigate to="/login" />;
  }

  // If token exists, render the protected component
  return <>{children}</>;
};

export default AuthRoute;
