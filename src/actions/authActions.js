import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT, CHECK_AUTH, CHECK_AUTH_SUCCESS, CHECK_AUTH_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "./types";

export const loginRequest = (email, password) => ({
    type: LOGIN_REQUEST,
    payload: {
        email,
        password,
    },
});

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: {
        user,
    },
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: {
        error,
    },
});

export const registerRequest = (email, password) => ({
    type: REGISTER_REQUEST,
    payload: {
        email,
        password,
    },
});

export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: {
        user,
    },
});

export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: {
        error,
    },
});

export const checkAuth = () => ({
    type: CHECK_AUTH,
});

export const checkAuthSuccess = (user) => ({
    type: CHECK_AUTH_SUCCESS,
    payload: user,
});

export const checkAuthFailure = (error) => ({
    type: CHECK_AUTH_FAILURE,
    payload: error,
});

export const logout = () => ({
    type: LOGOUT,
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

export const logoutFailure = (error) => ({
    type: LOGOUT_FAILURE,
    payload: error,
});
