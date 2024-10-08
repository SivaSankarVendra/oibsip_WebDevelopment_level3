import React from 'react';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ children, role }) => {
  const userRole = localStorage.getItem('userRole');

  if (userRole === role) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RestrictedRoute;
