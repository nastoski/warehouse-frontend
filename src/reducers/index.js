import { combineReducers } from 'redux';
import authReducer from './authReducer';
import warehouseReducer from './warehouseReducer';
import storeReducer from './storeReducer';
import itemReducer from './itemReducer';
import transferReducer from './transferReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    warehouse: warehouseReducer,
    store: storeReducer,
    item: itemReducer,
    transfer: transferReducer,
});

export default rootReducer;