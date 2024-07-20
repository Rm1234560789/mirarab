import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { setImg } from "../reducer/newsReducer.js";
import {deleteAudio, editAudio, getAudio, getAudioSucces, saveAudio} from "../reducer/audioReducer.js";


export function* workGet() {
    try {
        const res = yield call(() => axios.get("http://localhost:8080/audio"));
        yield put(getAudioSucces(res.data));
        console.log(res.data);
    } catch (e) {
        alert("Some error");
    }
}

export function* workPost(action) {
    try {
        const form = new FormData();
        form.append("file", action.payload.file);
        const res = yield call(() => axios.post("http://localhost:8080/api/files/video", form));

        let data = action.payload;
        data.url = res.data;
        yield call(() => axios.post("http://localhost:8080/audio", data));
        yield put(getAudio());
    } catch (e) {
        alert("Some error");
    }
}

export function* workDelete(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/audio/${action.payload}`));
        yield put(getAudio());
    } catch (e) {
        alert("Some error");
    }
}

export function* workEdit(action) {
    console.log(action.payload)

    try {
        console.log(action.payload)
        let data = action.payload;
        if (action.payload.edit) {
            const form = new FormData();
            form.append("file", action.payload.url);
            const res = yield call(() => axios.post("http://localhost:8080/api/files/video", form));
            data.url = res.data;
        }

        yield call(() => axios.put(`http://localhost:8080/audio/${action.payload.id}`, {name:data.name,url:data.url}));
        yield put(getAudio());
        yield put(setImg(""));
    } catch (e) {
        alert("Some error");
    }
}

export function* audioSaga() {
    yield takeLatest(getAudio().type, workGet);
    yield takeLatest(saveAudio().type,workPost);
    yield takeLatest(deleteAudio().type, workDelete);
    yield takeLatest(editAudio().type,workEdit);
}
