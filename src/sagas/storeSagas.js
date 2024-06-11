import { call, put, takeLatest } from 'redux-saga/effects';
import {
    FETCH_STORES_REQUEST,
    ADD_STORE_REQUEST,
    UPDATE_STORE_REQUEST,
    DELETE_STORE_REQUEST,
} from '../actions/types';
import {
    fetchStoresSuccess,
    fetchStoresFailure,
    addStoreSuccess,
    addStoreFailure,
    updateStoreSuccess,
    updateStoreFailure,
    deleteStoreSuccess,
    deleteStoreFailure
} from '../actions/storeActions';
import axios from '../axios';

function* fetchStoresSaga() {
    try {
        const response = yield call(axios.get, '/stores');
        yield put(fetchStoresSuccess(response.data));
    } catch (error) {
        yield put(fetchStoresFailure(error.message));
    }
}

function* addStoreSaga(action) {
    try {
        const response = yield call(axios.post, '/stores', action.payload);
        yield put(addStoreSuccess(response.data));
    } catch (error) {
        yield put(addStoreFailure(error.message));
    }
}

function* updateStoreSaga(action) {
    try {
        const { storeId, storeData } = action.payload;
        const response = yield call(axios.put, `/stores/${storeId}`, storeData);
        yield put(updateStoreSuccess(response.data));
    } catch (error) {
        yield put(updateStoreFailure(error.message));
    }
}

function* deleteStoreSaga(action) {
    try {
        const { storeId } = action.payload;
        yield call(axios.delete, `/stores/${storeId}`);
        yield put(deleteStoreSuccess(storeId));
    } catch (error) {
        yield put(deleteStoreFailure(error.message));
    }
}

export default function* watchStoreSagas() {
    yield takeLatest(FETCH_STORES_REQUEST, fetchStoresSaga);
    yield takeLatest(ADD_STORE_REQUEST, addStoreSaga);
    yield takeLatest(UPDATE_STORE_REQUEST, updateStoreSaga);
    yield takeLatest(DELETE_STORE_REQUEST, deleteStoreSaga);
}
