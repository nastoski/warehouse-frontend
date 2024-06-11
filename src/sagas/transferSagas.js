import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../axios';
import { TRANSFER_ITEM_TO_STORE_REQUEST } from '../actions/types';
import { transferItemToStoreSuccess, transferItemToStoreFailure } from '../actions/transferActions';


function* transferItemToStoreSaga(action) {
    try {
        const response = yield call(axios.post, '/transfers/transfer-to-store', action.payload);
        yield put(transferItemToStoreSuccess(response.data));
    } catch (error) {
        yield put(transferItemToStoreFailure(error));
    }
}

export default function* transferSagas() {
    yield takeLatest(TRANSFER_ITEM_TO_STORE_REQUEST, transferItemToStoreSaga);
}
