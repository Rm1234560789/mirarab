import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import {getProfessor, setImg} from "../reducer/newsReducer.js";
import {deleteProff, saveProff, updateProff} from "../reducer/professorReducer.js";


export function* workPostPro(action) {

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
        url: "http://localhost:8080/professor",
        method: "POST",
        data: data,
    }));
    yield put(getProfessor());
}

export function* workDeletePro(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/professor/${action.payload}`));
        yield put(getProfessor());
    } catch (e) {
        alert("Some error");
    }
}

export function* workUpdatePro(action) {
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
        url: `http://localhost:8080/professor/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getProfessor())
    yield put(setImg(""))
}



export function* professorSaga() {
  yield takeLatest(saveProff().type, workPostPro);
  yield takeLatest(updateProff().type,workUpdatePro);
  yield takeLatest(deleteProff().type,workDeletePro)
}
