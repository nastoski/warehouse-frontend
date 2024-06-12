import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../axios';
import { loginSuccess, loginFailure, registerSuccess, registerFailure, checkAuthSuccess, checkAuthFailure, logoutSuccess, logoutFailure } from '../actions/authActions';
import { LOGIN_REQUEST, REGISTER_REQUEST, CHECK_AUTH, LOGOUT } from '../actions/types';
import Cookies from 'js-cookie';
// import { checkAuth } from '../actions/authActions';

function* loginSaga(action) {
    try {
        const response = yield call(axios.post, '/auth/login', action.payload);
        yield put(loginSuccess(response.data));
        localStorage.setItem('currentUser', JSON.stringify(response.data));
    } catch (error) {
        yield put(loginFailure(error.message || 'Network error'));
    }
}

function* registerSaga(action) {
    try {
        const response = yield call(axios.post, '/auth/register', action.payload);
        yield put(registerSuccess(response.data));
    } catch (error) {
        yield put(registerFailure(error.response.data));
    }
}

function* checkAuthSaga() {
    try {
        const response = yield call(axios.get, '/auth/check-status');

        yield put(checkAuthSuccess(response.data.user));

    } catch (error) {
        yield put(checkAuthFailure(error));
    }
}

function* handleLogout() {
    try {
        yield call(axios.post, '/auth/logout');
        localStorage.removeItem('currentUser');
        yield put(logoutSuccess());
    } catch (error) {
        yield put(logoutFailure(error.message));
    }
}

export default function* authSagas() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
    yield takeLatest(REGISTER_REQUEST, registerSaga);
    yield takeLatest(CHECK_AUTH, checkAuthSaga);
    yield takeLatest(LOGOUT, handleLogout);
}
