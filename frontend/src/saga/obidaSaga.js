import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import {setImg} from "../reducer/newsReducer.js";
import {deleteObida, getObida, getObidaSucces, saveObida, updateObida} from "../reducer/obidaReducer.js";


export function* workGetObida() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/obida",
            method: "GET"
        }));
        console.log(res.data)
        yield put(getObidaSucces(res.data));
    } catch (e) {
        alert("some error");
    }
}

export function* workPostObida(action) {

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
        url: "http://localhost:8080/obida",
        method: "POST",
        data: data,
    }));
    yield put(getObida());
}

export function* workDeleteObida(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/obida/${action.payload}`));
        yield put(getObida());
    } catch (e) {
        alert("Some error");
    }
}

export function* workUpdateObida(action) {
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
        url: `http://localhost:8080/obida/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getObida())
    yield put(setImg(""))
}



export function* obidaSaga() {
    yield takeLatest(getObida().type,workGetObida);
    yield takeLatest(saveObida().type,workPostObida);
    yield takeLatest(deleteObida().type,workDeleteObida);
    yield takeLatest(updateObida().type,workUpdateObida);
}
