import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { setImg} from "../reducer/newsReducer.js";
import {deleteQabul, getQabul, getQabulSucces, saveQabul, updateQabul} from "../reducer/qabulReducer.js";


export function* workGet() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/qabul",
            method: "GET"
        }));
        yield put(getQabulSucces(res.data));
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
    console.log(res.data)
    let data = action.payload;
    data.img = res.data;
    console.log(data)
    yield call(() => axios({
        url: "http://localhost:8080/qabul",
        method: "POST",
        data: data,
    }));
    yield put(getQabul());
}

export function* workDelete(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/qabul/${action.payload}`));
        yield put(getQabul());
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
        url: `http://localhost:8080/qabul/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getQabul())
    yield put(setImg(""))
}



export function* qabulSaga() {
    yield takeLatest(getQabul().type, workGet);
    yield takeLatest(saveQabul().type,workPost);
    yield takeLatest(deleteQabul().type,workDelete);
    yield takeLatest(updateQabul().type,workUpdate);
}
