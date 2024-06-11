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
} from './types';

export const fetchStoresRequest = () => ({
    type: FETCH_STORES_REQUEST,
});

export const fetchStoresSuccess = (stores) => ({
    type: FETCH_STORES_SUCCESS,
    payload: stores,
});

export const fetchStoresFailure = (error) => ({
    type: FETCH_STORES_FAILURE,
    payload: error,
});

export const addStoreRequest = (storeData) => ({
    type: ADD_STORE_REQUEST,
    payload: storeData,
});

export const addStoreSuccess = (store) => ({
    type: ADD_STORE_SUCCESS,
    payload: store,
});

export const addStoreFailure = (error) => ({
    type: ADD_STORE_FAILURE,
    payload: error,
});

export const updateStoreRequest = (storeId, storeData) => ({
    type: UPDATE_STORE_REQUEST,
    payload: { storeId, storeData },
});

export const updateStoreSuccess = (store) => ({
    type: UPDATE_STORE_SUCCESS,
    payload: store,
});

export const updateStoreFailure = (error) => ({
    type: UPDATE_STORE_FAILURE,
    payload: error,
});

export const deleteStoreRequest = (storeId) => ({
    type: DELETE_STORE_REQUEST,
    payload: { storeId },
});

export const deleteStoreSuccess = (storeId) => ({
    type: DELETE_STORE_SUCCESS,
    payload: storeId,
});

export const deleteStoreFailure = (error) => ({
    type: DELETE_STORE_FAILURE,
    payload: error,
});