import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import {setImg} from "../reducer/newsReducer.js";
import {deleteT, get, getSucces, saveT, updateT} from "../reducer/raddiyaReducer.js";


export function* workGet() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/raddiyalar",
            method: "GET"
        }));
        yield put(getSucces(res.data));
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
    const response = yield call(() => axios({
        url: "http://localhost:8080/raddiyalar",
        method: "POST",
        data: data,
    }));
    yield put(get());
}

export function* workDelete(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/raddiyalar/${action.payload}`));
        yield put(get());
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
    const response = yield call(() => axios({
        url: `http://localhost:8080/raddiyalar/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(get())
    yield put(setImg(""))
}



export function* raddiyaSaga() {
    yield takeLatest(get().type,workGet);
    yield takeLatest(saveT().type,workPost);
    yield takeLatest(deleteT().type,workDelete);
    yield takeLatest(updateT().type,workUpdate);
}
