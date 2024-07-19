import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import {setImg} from "../reducer/newsReducer.js";
import {deleteXorij, getXorij, getXorijSucces, saveXorij, updateXorij} from "../reducer/xorijReducer.js";


export function* workGet() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/xorij",
            method: "GET"
        }));
        yield put(getXorijSucces(res.data));
    } catch (e) {
        alert("some error");
    }
}

export function* workPost(action) {

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
        url: "http://localhost:8080/xorij",
        method: "POST",
        data: data,
    }));
    yield put(getXorij());
}

export function* workDelete(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/xorij/${action.payload}`));
        yield put(getXorij());
    } catch (e) {
        alert("Some error");
    }
}

export function* workUpdate(action) {
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
        url: `http://localhost:8080/xorij/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getXorij())
    yield put(setImg(""))
}



export function* xorijSaga() {
    yield takeLatest(getXorij().type,workGet);
    yield takeLatest(saveXorij().type,workPost);
    yield takeLatest(deleteXorij().type,workDelete);
    yield takeLatest(updateXorij().type,workUpdate);
}
