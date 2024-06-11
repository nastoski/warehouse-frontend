import {
    FETCH_STORES_REQUEST,
    FETCH_STORES_SUCCESS,
    FETCH_STORES_FAILURE,
    ADD_STORE_REQUEST,
    ADD_STORE_SUCCESS,
    ADD_STORE_FAILURE,
    UPDATE_STORE_REQUEST,
    UPDATE_STORE_SUCCESS,
    UPDATE_STORE_FAILURE,
    DELETE_STORE_REQUEST,
    DELETE_STORE_SUCCESS,
    DELETE_STORE_FAILURE
} from '../actions/types';

const initialState = {
    stores: [],
    loading: false,
    error: null
};

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STORES_REQUEST:
        case ADD_STORE_REQUEST:
        case UPDATE_STORE_REQUEST:
        case DELETE_STORE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_STORES_SUCCESS:
            return {
                ...state,
                loading: false,
                stores: action.payload
            };
        case ADD_STORE_SUCCESS:
            return {
                ...state,
                loading: false,
                stores: [...state.stores, action.payload]
            };
        case UPDATE_STORE_SUCCESS:
            return {
                ...state,
                loading: false,
                stores: state.stores.map(store =>
                    store._id === action.payload._id ? action.payload : store
                )
            };
        case DELETE_STORE_SUCCESS:
            return {
                ...state,
                loading: false,
                stores: state.stores.filter(store => store._id !== action.payload)
            };
        case FETCH_STORES_FAILURE:
        case ADD_STORE_FAILURE:
        case UPDATE_STORE_FAILURE:
        case DELETE_STORE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default storeReducer;
