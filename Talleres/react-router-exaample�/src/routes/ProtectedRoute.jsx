import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    return isAuthenticated === 'true' ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
