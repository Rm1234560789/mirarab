import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import {getMaqola, setImg} from "../reducer/newsReducer.js";
import {deleteMaqola, saveMaqola, updateMaqola} from "../reducer/maqolaReducer.js";

export function* workPostMq(action) {

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
        url: "http://localhost:8080/maqola",
        method: "POST",
        data: data,
    }));
    yield put(getMaqola());
}

export function* workDeleteMq(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/maqola/${action.payload}`));
        yield put(getMaqola());
    } catch (e) {
        alert("Some error");
    }
}

export function* workUpdateMq(action) {
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
        url: `http://localhost:8080/maqola/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getMaqola())
    yield put(setImg(""))
}



export function* maqolaSaga() {
    yield takeLatest(saveMaqola().type,workPostMq);
    yield takeLatest(deleteMaqola().type,workDeleteMq);
    yield takeLatest(updateMaqola().type,workUpdateMq);
}
