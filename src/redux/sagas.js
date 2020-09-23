import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_USERS, REQUEST_USERS} from './types';
import {hideLoader, showLoader} from './actions';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_USERS, sagaWorker);
}

function* sagaWorker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchUsers);
        yield put({type: FETCH_USERS, payload});
        yield put(hideLoader());
    } catch(e) {
        yield put(hideLoader());
        yield console.warn(e.message);
    }
}

async function fetchUsers() {
    const responseRaw = await fetch('http://localhost:4000/users');
    return await responseRaw.json();
}