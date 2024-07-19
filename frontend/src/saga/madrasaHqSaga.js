import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import {getMadrasa, setImg} from "../reducer/newsReducer.js";
import {deleteMadrasa, saveMadrasa, updateMadrasa,getInfo,getInfoSucces} from "../reducer/madrasaHqReducer.js";



export function* workPostMad(action) {

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
        url: "http://localhost:8080/madrasahq",
        method: "POST",
        data: data,
    }));
    yield put(getMadrasa());
}

export function* workDeleteMad(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/madrasahq/${action.payload}`));
        yield put(getMadrasa());
    } catch (e) {
        alert("Some error");
    }
}

export function* workUpdateMad(action) {
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
        url: `http://localhost:8080/madrasahq/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getMadrasa())
    yield put(setImg(""))
}

export function* getMadrasaById(action) {

    let id = action.payload;
    console.log(id)
    console.log(action)
    const res = yield call(() => axios({
        url: `http://localhost:8080/madrasahq/${id}`,
        method: "GET"
    }))
    console.log(res.data)
    yield put(getInfoSucces(res.data))

}



export function* madrasaHqSaga() {
    yield takeLatest(saveMadrasa().type,workPostMad);
    yield takeLatest(deleteMadrasa().type,workDeleteMad);
    yield takeLatest(updateMadrasa().type,workUpdateMad);
    yield takeLatest(getInfo().type,getMadrasaById)
}
