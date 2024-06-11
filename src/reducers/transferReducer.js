import { TRANSFER_ITEM_TO_STORE_REQUEST, TRANSFER_ITEM_TO_STORE_SUCCESS, TRANSFER_ITEM_TO_STORE_FAILURE } from '../actions/types';

const initialState = {
    loading: false,
    error: null,
};

const transferReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSFER_ITEM_TO_STORE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case TRANSFER_ITEM_TO_STORE_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case TRANSFER_ITEM_TO_STORE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default transferReducer;
