import { call, takeLatest, put } from "redux-saga/effects";
import {
    deleteRahbariyat,
    getRahbariyat,
    getRahbariyatSucces,
    saveRahbariyat,
    updateRahbariyat
} from "../reducer/rahbariyatReducer.js";
import axios from "axios";
import {getNews, setImg} from "../reducer/newsReducer.js";


export function* workGetrah() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/rahbariyat",
            method: "GET"
        }));
        yield put(getRahbariyatSucces(res.data));
    } catch (e) {
        alert("some error");
    }
}

export function* workPostrah(action) {

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
        url: "http://localhost:8080/rahbariyat",
        method: "POST",
        data: data,
    }));
    yield put(getRahbariyat());
}

export function* workDeleterah(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/rahbariyat/${action.payload}`));
        yield put(getRahbariyat());
    } catch (e) {
        alert("Some error");
    }
}

export function* workUpdaterah(action) {
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
        url: `http://localhost:8080/rahbariyat/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getRahbariyat())
    yield put(setImg(""))
}



export function* rahbariyatSaga() {
    yield takeLatest(getRahbariyat().type, workGetrah);
    yield takeLatest(saveRahbariyat().type, workPostrah);
    yield takeLatest(deleteRahbariyat().type,workDeleterah);
    yield takeLatest(updateRahbariyat().type,workUpdaterah);
}
