import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import {setImg} from "../reducer/newsReducer.js";
import {deleteObida, getObida, getObidaSucces, saveObida, updateObida} from "../reducer/obidaReducer.js";
import {deleteQadam, getQadam, getQadamSucces, saveQadam, updateQadam} from "../reducer/qadamReducer.js";


export function* workGetQadam() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/qadam",
            method: "GET"
        }));
        console.log(res.data)
        yield put(getQadamSucces(res.data));
    } catch (e) {
        alert("some error");
    }
}

export function* workPostQadam(action) {

    const form = new FormData();
    form.append("file", action.payload.img);
    const res = yield call(() => axios({
        url: "http://localhost:8080/api/files/img",
        method: "POST",
        data: form
    }));
    let data = action.payload;
    data.img = res.data;
    yield call(() => axios({
        url: "http://localhost:8080/qadam",
        method: "POST",
        data: data,
    }));
    yield put(getQadam());
}

export function* workDeleteQadam(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/qadam/${action.payload}`));
        yield put(getQadam());
    } catch (e) {
        alert("Some error");
    }
}

export function* workUpdateQadam(action) {
    console.log(action.payload)
    let data = action.payload;
    if (action.payload.edit===true){
        console.log("editTrue")
        const form = new FormData();
        form.append("file", action.payload.img);
        const res = yield call(() => axios({
            url: "http://localhost:8080/api/files/img",
            method: "POST",
            data: form
        }));

        data.img = res.data;

    }
    yield call(() => axios({
        url: `http://localhost:8080/qadam/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getQadam())
    yield put(setImg(""))
}



export function* qadamSaga() {
    yield takeLatest(getQadam().type,workGetQadam);
    yield takeLatest(saveQadam().type,workPostQadam);
    yield takeLatest(deleteQadam().type,workDeleteQadam);
    yield takeLatest(updateQadam().type,workUpdateQadam);
}
