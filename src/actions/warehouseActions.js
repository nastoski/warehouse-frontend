import { FETCH_WAREHOUSES_REQUEST, FETCH_WAREHOUSES_SUCCESS, FETCH_WAREHOUSES_FAILURE, UPDATE_WAREHOUSE_REQUEST, UPDATE_WAREHOUSE_SUCCESS, UPDATE_WAREHOUSE_FAILURE, DELETE_WAREHOUSE_REQUEST, DELETE_WAREHOUSE_SUCCESS, DELETE_WAREHOUSE_FAILURE, ADD_WAREHOUSE_REQUEST, ADD_WAREHOUSE_SUCCESS, ADD_WAREHOUSE_FAILURE, ADD_ITEM_TO_WAREHOUSE_REQUEST, ADD_ITEM_TO_WAREHOUSE_SUCCESS, ADD_ITEM_TO_WAREHOUSE_FAILURE } from './types';

export const fetchWarehousesRequest = () => ({
  type: FETCH_WAREHOUSES_REQUEST,
});

export const fetchWarehousesSuccess = (warehouses) => ({
  type: FETCH_WAREHOUSES_SUCCESS,
  payload: warehouses,
});

export const fetchWarehousesFailure = (error) => ({
  type: FETCH_WAREHOUSES_FAILURE,
  payload: error,
});

export const addWarehouseRequest = (warehouseData) => ({
  type: ADD_WAREHOUSE_REQUEST,
  payload: warehouseData,
});

export const addWarehouseSuccess = (warehouse) => ({
  type: ADD_WAREHOUSE_SUCCESS,
  payload: warehouse,
});

export const addWarehouseFailure = (error) => ({
  type: ADD_WAREHOUSE_FAILURE,
  payload: error,
});

export const updateWarehouseRequest = (warehouseId, warehouseData) => ({
  type: UPDATE_WAREHOUSE_REQUEST,
  payload: { warehouseId, warehouseData },
});

export const updateWarehouseSuccess = (warehouse) => ({
  type: UPDATE_WAREHOUSE_SUCCESS,
  payload: warehouse,
});

export const updateWarehouseFailure = (error) => ({
  type: UPDATE_WAREHOUSE_FAILURE,
  payload: error,
});

export const deleteWarehouseRequest = (warehouseId) => ({
  type: DELETE_WAREHOUSE_REQUEST,
  payload: { warehouseId },
});

export const deleteWarehouseSuccess = (warehouseId) => ({
  type: DELETE_WAREHOUSE_SUCCESS,
  payload: warehouseId,
});

export const deleteWarehouseFailure = (error) => ({
  type: DELETE_WAREHOUSE_FAILURE,
  payload: error,
});

export const addItemToWarehouseRequest = (data) => ({
  type: ADD_ITEM_TO_WAREHOUSE_REQUEST,
  payload: data
});

export const addItemToWarehouseSuccess = (warehouse) => ({
  type: ADD_ITEM_TO_WAREHOUSE_SUCCESS,
  payload: warehouse
});

export const addItemToWarehouseFailure = (error) => ({
  type: ADD_ITEM_TO_WAREHOUSE_FAILURE,
  payload: error
});