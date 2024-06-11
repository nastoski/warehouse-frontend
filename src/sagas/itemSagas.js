import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../axios';
import { ADD_ITEM_REQUEST, DELETE_ITEM_REQUEST, FETCH_ITEMS_REQUEST, UPDATE_ITEM_REQUEST } from '../actions/types';
import { addItemSuccess, addItemFailure, fetchItemsSuccess, fetchItemsFailure, updateItemSuccess, updateItemFailure, deleteItemSuccess, deleteItemFailure } from '../actions/itemActions';

function* fetchItemsSaga() {
    try {
        const response = yield call(() => axios.get('/items'));
        yield put(fetchItemsSuccess(response.data));
    } catch (error) {
        yield put(fetchItemsFailure(error.message));
    }
}

function* updateItemSaga(action) {
    try {
        const { itemId, itemData } = action.payload;
        const response = yield call(() => axios.put(`/items/${itemId}`, itemData));
        yield put(updateItemSuccess(response.data));
    } catch (error) {
        yield put(updateItemFailure(error.message));
    }
}

function* deleteItemSaga(action) {
    try {
        const { itemId } = action.payload;
        yield call(() => axios.delete(`/items/${itemId}`));
        yield put(deleteItemSuccess(itemId));
    } catch (error) {
        yield put(deleteItemFailure(error.message));
    }
}

function* addItemSaga(action) {
    try {
        const response = yield call(() => axios.post('/items', action.payload));
        yield put(addItemSuccess(response.data));
    } catch (error) {
        yield put(addItemFailure(error.message));
    }
}

export default function* itemSagas() {
    yield takeLatest(FETCH_ITEMS_REQUEST, fetchItemsSaga);
    yield takeLatest(ADD_ITEM_REQUEST, addItemSaga);
    yield takeLatest(UPDATE_ITEM_REQUEST, updateItemSaga);
    yield takeLatest(DELETE_ITEM_REQUEST, deleteItemSaga);
}