import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import {setImg} from "../reducer/newsReducer.js";
import {deleteIslom, getIslom, getIslomSuccess, saveIslom, updateIslom} from "../reducer/buxoroReducer.js";


export function* workGetIslom() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/bux",
            method: "GET"
        }));
        yield put(getIslomSuccess(res.data));
    } catch (e) {
        alert("some error");
    }
}

export function* workPostIslom(action) {

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
        url: "http://localhost:8080/bux",
        method: "POST",
        data: data,
    }));
    yield put(getIslom());
}

export function* workDeleteIslom(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/bux/${action.payload}`));
        yield put(getIslom());
    } catch (e) {
        alert("Some error");
    }
}

export function* workUpdateIslom(action) {
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
        url: `http://localhost:8080/bux/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getIslom())
    yield put(setImg(""))
}



export function* buxoroSaga() {
    yield takeLatest(getIslom().type,workGetIslom);
    yield takeLatest(saveIslom().type,workPostIslom);
    yield takeLatest(deleteIslom().type,workDeleteIslom);
    yield takeLatest(updateIslom().type,workUpdateIslom);
}
