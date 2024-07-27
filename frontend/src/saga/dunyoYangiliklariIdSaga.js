import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getInfoSuccess, getInfo, getWorldNewsSuccess } from "../reducer/dunyoYangiliklariIdReducer.js";
import {getDunyo} from "../reducer/dunyoYangiliklariReducer.js";

export function* getNewsById(action) {
    try {
        const id = action.payload;
        const res = yield call(axios.get, `http://localhost:8081/api/worldnews/${id}`);
        yield put(getInfoSuccess(res.data));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export function* getWorldNews() {
    try {
        const res = yield call(axios.get, `http://localhost:8081/api/worldnews`);
        yield put(getWorldNewsSuccess(res.data));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export function* worldnewsid() {
    yield takeLatest(getInfo.type, getNewsById);
    yield takeLatest(getDunyo.type, getWorldNews);
}
