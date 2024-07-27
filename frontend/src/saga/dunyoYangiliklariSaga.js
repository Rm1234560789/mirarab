import axios from "axios";
import { call, takeLatest, put } from "redux-saga/effects";
import {deleteDunyo, getDunyo, getDunyoSuccess, saveDunyo, updateDunyo} from "../reducer/dunyoYangiliklariReducer.js";
import {deleteNews, getNewNews, saveNews, updateNews} from "../reducer/newnewsReducer.js";
import {setImg} from "../reducer/newsReducer.js";

export function* workGet() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8081/api/worldnews",
            method: "GET"
        }));
        yield put(getDunyoSuccess(res.data));
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
        url: "http://localhost:8081/api/worldnews",
        method: "POST",
        data: data,
    }));
    yield put(getDunyo());
}

export function* workDelete(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8081/api/worldnews/${action.payload}`));
        yield put(getDunyo());
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
        url: `http://localhost:8081/api/worldnews/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getDunyo())
    yield put(setImg(""))
}
export function* dunyoSaga() {
    yield takeLatest(getDunyo().type, workGet);
    yield takeLatest(saveDunyo().type, workPost);
    yield takeLatest(deleteDunyo().type, workDelete);
    yield takeLatest(updateDunyo().type, workUpdate);

}