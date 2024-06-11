import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../axios';
import { FETCH_WAREHOUSES_REQUEST, UPDATE_WAREHOUSE_REQUEST, DELETE_WAREHOUSE_REQUEST, ADD_WAREHOUSE_REQUEST, ADD_ITEM_TO_WAREHOUSE_REQUEST } from '../actions/types';
import { fetchWarehousesSuccess, fetchWarehousesFailure, addWarehouseSuccess, addWarehouseFailure, updateWarehouseSuccess, updateWarehouseFailure, deleteWarehouseSuccess, deleteWarehouseFailure, addItemToWarehouseSuccess, addItemToWarehouseFailure } from '../actions/warehouseActions';

function* fetchWarehousesSaga() {
    try {
        const response = yield call(axios.get, '/warehouses');
        yield put(fetchWarehousesSuccess(response.data));
    } catch (error) {
        yield put(fetchWarehousesFailure(error.message));
    }
}

function* addWarehouseSaga(action) {
    try {
        const response = yield call(axios.post, '/warehouses', action.payload);
        yield put(addWarehouseSuccess(response.data));
    } catch (error) {
        yield put(addWarehouseFailure(error.message));
    }
}

function* updateWarehouseSaga(action) {
    try {
        const { warehouseId, warehouseData } = action.payload;
        const response = yield call(axios.put, `/warehouses/${warehouseId}`, warehouseData);
        yield put(updateWarehouseSuccess(response.data));
    } catch (error) {
        yield put(updateWarehouseFailure(error.message));
    }
}

function* deleteWarehouseSaga(action) {
    try {
        const { warehouseId } = action.payload;
        yield call(axios.delete, `/warehouses/${warehouseId}`);
        yield put(deleteWarehouseSuccess(warehouseId));
    } catch (error) {
        yield put(deleteWarehouseFailure(error.message));
    }
}


function* addItemToWarehouseSaga(action) {
    try {
        const response = yield call(axios.post, '/warehouses/add-item', action.payload);
        yield put(addItemToWarehouseSuccess(response.data));
    } catch (error) {
        yield put(addItemToWarehouseFailure(error.message));
    }
}

export default function* warehouseSagas() {
    yield takeLatest(FETCH_WAREHOUSES_REQUEST, fetchWarehousesSaga);
    yield takeLatest(ADD_WAREHOUSE_REQUEST, addWarehouseSaga);
    yield takeLatest(UPDATE_WAREHOUSE_REQUEST, updateWarehouseSaga);
    yield takeLatest(DELETE_WAREHOUSE_REQUEST, deleteWarehouseSaga);
    yield takeLatest(ADD_ITEM_TO_WAREHOUSE_REQUEST, addItemToWarehouseSaga);
}
