import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getInfo, getInfoSuccess } from '../reducer/newnewsbyidReducer';

export function* getNewsById(action) {
    try {
        const id = action.payload;
        const res = yield call(axios.get, `http://localhost:8081/api/newnews/${id}`);
        yield put(getInfoSuccess(res.data));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export function* newnewsid() {
    yield takeLatest(getInfo.type, getNewsById);
}
