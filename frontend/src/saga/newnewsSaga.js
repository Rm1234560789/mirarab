import axios from "axios";
import { call, takeLatest, put } from "redux-saga/effects";
import {deleteNews, getNewNews, getNewNewsSucces, saveNews, updateNews} from "../reducer/newnewsReducer.js";
import {getShartnoma} from "../reducer/shartnomaReducer.js";
import {setImg} from "../reducer/newsReducer.js";

export function* workGet() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8081/api/newnews",
            method: "GET"
        }));
        yield put(getNewNewsSucces(res.data));
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
        url: "http://localhost:8081/api/newnews",
        method: "POST",
        data: data,
    }));
    yield put(getNewNews());
}

export function* workDelete(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8081/api/newnews/${action.payload}`));
        yield put(getNewNews());
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
        url: `http://localhost:8081/api/newnews/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getNewNews())
    yield put(setImg(""))
}
export function* newnewsSaga() {
    yield takeLatest(getNewNews().type, workGet);
    yield takeLatest(saveNews().type, workPost);
    yield takeLatest(deleteNews().type, workDelete);
    yield takeLatest(updateNews().type, workUpdate);


}