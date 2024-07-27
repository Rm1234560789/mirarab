import axios from "axios";
import { call, takeLatest, put } from "redux-saga/effects";
import {deleteSavol, getSavol, getSavolSuccess, saveSavol, updateSavol} from "../reducer/savoljavobReducer.js";
import {deleteFikr, getFikr, saveFikr, updateFikr} from "../reducer/fikrmulohazaReducer.js";
import {setImg} from "../reducer/newsReducer.js";

export function* workGet() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8081/api/savol",
            method: "GET"
        }));
        yield put(getSavolSuccess(res.data));
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
        url: "http://localhost:8081/api/savol",
        method: "POST",
        data: data,
    }));
    yield put(getSavol());
}

export function* workDelete(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8081/api/savol/${action.payload}`));
        yield put(getSavol());
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
        url: `http://localhost:8081/api/savol/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getSavol())
    yield put(setImg(""))
}
export function* savoljavobSaga() {
    yield takeLatest(getSavol().type, workGet);
    yield takeLatest(saveSavol().type, workPost);
    yield takeLatest(deleteSavol().type, workDelete);
    yield takeLatest(updateSavol().type, workUpdate);

}