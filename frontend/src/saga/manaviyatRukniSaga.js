import { call, takeLatest, put } from "redux-saga/effects";
import {
    deleteManaviyatRukni,
    saveManaviyatRukni,
    updateManaviyatRukni
} from "../reducer/manaviyatRukniReducer.js";
import axios from "axios";
import {getManaviyat, setImg} from "../reducer/newsReducer.js";
import {workDeleterah, workUpdaterah} from "./rahbariyatSaga.js";



export function* workPostMan(action) {

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
        url: "http://localhost:8080/manaviyat",
        method: "POST",
        data: data,
    }));
    yield put(getManaviyat());
}

export function* workDeleteMan(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/manaviyat/${action.payload}`));
        yield put(getManaviyat());
    } catch (e) {
        alert("Some error");
    }
}

export function* workUpdateMan(action) {
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
        url: `http://localhost:8080/manaviyat/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getManaviyat())
    yield put(setImg(""))
}



export function* manaviyatRukniSaga() {
    yield takeLatest(saveManaviyatRukni().type,workPostMan);
    yield takeLatest(deleteManaviyatRukni().type,workDeleteMan);
    yield takeLatest(updateManaviyatRukni().type,workUpdateMan);
}
