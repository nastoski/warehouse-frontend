import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { checkAuth } from '../actions/authActions';

const PrivateRoute = ({ children }) => {
    const currentUser = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser) {
            dispatch(checkAuth());
        }
    }, [dispatch, currentUser]);

    if (window.location.pathname === '/register' && !currentUser) {
        return <Navigate to="/register" replace />;
    }

    return currentUser ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
