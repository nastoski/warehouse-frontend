import { TRANSFER_ITEM_TO_STORE_REQUEST, TRANSFER_ITEM_TO_STORE_SUCCESS, TRANSFER_ITEM_TO_STORE_FAILURE } from './types';

export const transferItemToStoreRequest = (data) => ({
    type: TRANSFER_ITEM_TO_STORE_REQUEST,
    payload: data,
});

export const transferItemToStoreSuccess = (data) => ({
    type: TRANSFER_ITEM_TO_STORE_SUCCESS,
    payload: data,
});

export const transferItemToStoreFailure = (error) => ({
    type: TRANSFER_ITEM_TO_STORE_FAILURE,
    payload: error,
});