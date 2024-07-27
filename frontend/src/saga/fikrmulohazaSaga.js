import axios from "axios";
import { call, takeLatest, put } from "redux-saga/effects";
import {deleteFikr, getFikr, getFikrSuccess, saveFikr, updateFikr} from "../reducer/fikrmulohazaReducer.js";
import {getDunyo} from "../reducer/dunyoYangiliklariReducer.js";
import {setImg} from "../reducer/newsReducer.js";

export function* workGet() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8081/api/fikr",
            method: "GET"
        }));
        yield put(getFikrSuccess(res.data));
    } catch (e) {
        alert("some error");
    }
}
export function* workPost(action) {

    const form = new FormData();
    form.append("file", action.payload.img);
    const res = yield call(() => axios({
        url: "http://localhost:8081/api/files/img",
        method: "POST",
        data: form
    }));
    let data = action.payload;
    data.img = res.data;
    yield call(() => axios({
        url: "http://localhost:8081/api/fikr",
        method: "POST",
        data: data,
    }));
    yield put(getFikr());
}

export function* workDelete(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8081/api/fikr/${action.payload}`));
        yield put(getFikr());
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
            url: "http://localhost:8081/api/files/img",
            method: "POST",
            data: form
        }));

        data.img = res.data;

    }
    yield call(() => axios({
        url: `http://localhost:8081/api/fikr/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getFikr())
    yield put(setImg(""))
}
export function* fikrmulohazaSaga() {
    yield takeLatest(getFikr().type, workGet);
    yield takeLatest(saveFikr().type, workPost);
    yield takeLatest(deleteFikr().type, workDelete);
    yield takeLatest(updateFikr().type, workUpdate);

}