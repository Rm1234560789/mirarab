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
import {
    deleteShartnoma,
    getShartnoma,
    getShartnomaSucces,
    saveShartnoma,
    updateShartnoma
} from "../reducer/shartnomaReducer.js";


export function* workGet() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/xalqaro",
            method: "GET"
        }));
        yield put(getShartnomaSucces(res.data));
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
        url: "http://localhost:8080/xalqaro",
        method: "POST",
        data: data,
    }));
    yield put(getShartnoma());
}

export function* workDelete(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/xalqaro/${action.payload}`));
        yield put(getShartnoma());
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
        url: `http://localhost:8080/xalqaro/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getShartnoma())
    yield put(setImg(""))
}



export function* shartnomaSaga() {
    yield takeLatest(getShartnoma().type,workGet);
    yield takeLatest(saveShartnoma().type,workPost);
    yield takeLatest(deleteShartnoma().type,workDelete);
    yield takeLatest(updateShartnoma().type,workUpdate);
}
