import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const currentUser = useSelector((state) => state.auth.user);

    if (window.location.pathname === '/register') {
        return children;
    }

    return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;