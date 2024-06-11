import { all } from 'redux-saga/effects';
import authSagas from './authSagas';
import warehouseSagas from './warehouseSagas';
import storeSagas from './storeSagas';
import itemSagas from './itemSagas';
import transferSagas from './transferSagas';

export default function* rootSaga() {
    yield all([
        authSagas(),
        warehouseSagas(),
        storeSagas(),
        itemSagas(),
        transferSagas(),
    ]);
}
