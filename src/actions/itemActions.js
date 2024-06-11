import { ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE, FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE, UPDATE_ITEM_REQUEST, UPDATE_ITEM_SUCCESS, UPDATE_ITEM_FAILURE, DELETE_ITEM_REQUEST, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE } from './types';

export const fetchItemsRequest = () => ({
    type: FETCH_ITEMS_REQUEST,
});

export const fetchItemsSuccess = (items) => ({
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
});

export const fetchItemsFailure = (error) => ({
    type: FETCH_ITEMS_FAILURE,
    payload: error,
});

export const addItemRequest = (itemData) => ({
    type: ADD_ITEM_REQUEST,
    payload: itemData,
});

export const addItemSuccess = (item) => ({
    type: ADD_ITEM_SUCCESS,
    payload: item,
});

export const addItemFailure = (error) => ({
    type: ADD_ITEM_FAILURE,
    payload: error,
});

export const updateItemRequest = (itemId, itemData) => ({
    type: UPDATE_ITEM_REQUEST,
    payload: {
        itemId,
        itemData
    },
});

export const updateItemSuccess = (item) => ({
    type: UPDATE_ITEM_SUCCESS,
    payload: item
});

export const updateItemFailure = (error) => ({
    type: UPDATE_ITEM_FAILURE,
    payload: error
});

export const deleteItemRequest = (itemId) => ({
    type: DELETE_ITEM_REQUEST,
    payload: {
        itemId
    },
});

export const deleteItemSuccess = (itemId) => ({
    type: DELETE_ITEM_SUCCESS,
    payload: {
        itemId
    },
});

export const deleteItemFailure = (error) => ({
    type: DELETE_ITEM_FAILURE,
    payload: error
});