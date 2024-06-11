import { FETCH_WAREHOUSES_REQUEST, FETCH_WAREHOUSES_SUCCESS, FETCH_WAREHOUSES_FAILURE, ADD_WAREHOUSE_REQUEST, ADD_WAREHOUSE_SUCCESS, ADD_WAREHOUSE_FAILURE, UPDATE_WAREHOUSE_REQUEST, UPDATE_WAREHOUSE_SUCCESS, UPDATE_WAREHOUSE_FAILURE, DELETE_WAREHOUSE_REQUEST, DELETE_WAREHOUSE_SUCCESS, DELETE_WAREHOUSE_FAILURE, ADD_ITEM_TO_WAREHOUSE_REQUEST, ADD_ITEM_TO_WAREHOUSE_SUCCESS, ADD_ITEM_TO_WAREHOUSE_FAILURE } from '../actions/types';

const initialState = {
    warehouses: [],
    loading: false,
    error: null,
};

const warehouseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WAREHOUSES_REQUEST:
        case ADD_WAREHOUSE_REQUEST:
        case UPDATE_WAREHOUSE_REQUEST:
        case DELETE_WAREHOUSE_REQUEST:
        case ADD_ITEM_TO_WAREHOUSE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_WAREHOUSES_SUCCESS:
            return {
                ...state,
                loading: false,
                warehouses: action.payload,
            };
        case ADD_WAREHOUSE_SUCCESS:
            return {
                ...state,
                loading: false,
                warehouses: [...state.warehouses, action.payload],
            };
        case UPDATE_WAREHOUSE_SUCCESS:
            return {
                ...state,
                loading: false,
                warehouses: state.warehouses.map((warehouse) =>
                    warehouse._id === action.payload._id ? action.payload : warehouse
                ),
            };
        case DELETE_WAREHOUSE_SUCCESS:
            return {
                ...state,
                loading: false,
                warehouses: state.warehouses.filter((warehouse) => warehouse._id !== action.payload),
            };
        case ADD_ITEM_TO_WAREHOUSE_SUCCESS:
            return {
                ...state,
                warehouses: state.warehouses.map((warehouse) =>
                    warehouse._id === action.payload._id ? action.payload : warehouse
                ),
                loading: false
            };
        case FETCH_WAREHOUSES_FAILURE:
        case ADD_WAREHOUSE_FAILURE:
        case UPDATE_WAREHOUSE_FAILURE:
        case DELETE_WAREHOUSE_FAILURE:
        case ADD_ITEM_TO_WAREHOUSE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default warehouseReducer;