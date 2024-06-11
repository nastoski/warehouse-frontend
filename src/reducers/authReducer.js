import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, CHECK_AUTH, CHECK_AUTH_SUCCESS, CHECK_AUTH_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "../actions/types";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case CHECK_AUTH:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case CHECK_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                error: null,
            };
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
        case CHECK_AUTH_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload.error,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: null,
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default authReducer;
