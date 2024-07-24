import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import {setImg} from "../reducer/newsReducer.js";
import {
    deleteAlloma,
    getAlloma, getAllomaget,
    getAllomagetSuccess,
    getAllomaSuccess,
    saveAlloma,
    updateAlloma
} from "../reducer/allomaReducer.js";
import {getOneIslomBuxoroSuccess} from "../reducer/buxoroReducer.js";


export function* workGetAlloma() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/alloma",
            method: "GET"
        }));
        yield put(getAllomaSuccess(res.data));
    } catch (e) {
        alert("some error");
    }
}

export function* workPostAlloma(action) {

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
        url: "http://localhost:8080/alloma",
        method: "POST",
        data: data,
    }));
    yield put(getAlloma());
}

export function* workDeleteAlloma(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/alloma/${action.payload}`));
        yield put(getAlloma());
    } catch (e) {
        alert("Some error");
    }
}

export function* workUpdateAlloma(action) {
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
        url: `http://localhost:8080/alloma/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getAlloma())
    yield put(setImg(""))
}

export function* workGetAllomaget(action) {
    try {
        const res = yield call(() => axios({
            url: `http://localhost:8080/alloma/${action.payload}`,
            method: 'GET'
        }));
        yield put(getAllomagetSuccess(res.data));
    } catch (e) {
        alert("Some error");
    }
}



export function* allomaSaga() {
    yield takeLatest(getAlloma().type,workGetAlloma);
    yield takeLatest(saveAlloma().type,workPostAlloma);
    yield takeLatest(deleteAlloma().type,workDeleteAlloma);
    yield takeLatest(updateAlloma().type,workUpdateAlloma);
    yield takeLatest(getAllomaget().type,workGetAllomaget)
}
