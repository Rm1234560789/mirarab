import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { setImg } from "../reducer/newsReducer.js";
import { getVideoSucces, getVideo, saveVd, deleteVd, editVd } from "../reducer/vdReducer.js";

export function* workGetVd() {
    try {
        const res = yield call(() => axios.get("http://localhost:8080/video"));
        yield put(getVideoSucces(res.data));
        console.log(res.data);
    } catch (e) {
        alert("Some error");
    }
}

export function* workPostVd(action) {
    try {
        const form = new FormData();
        form.append("file", action.payload.file);
        const res = yield call(() => axios.post("http://localhost:8080/api/files/video", form));

        let data = action.payload;
        data.url = res.data;

        yield call(() => axios.post("http://localhost:8080/video", data));
        yield put(getVideo());
    } catch (e) {
        alert("Some error");
    }
}

export function* workDeleteVd(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/video/${action.payload}`));
        yield put(getVideo());
    } catch (e) {
        alert("Some error");
    }
}

export function* workEditVd(action) {
    try {
        console.log(action.payload)
        let data = action.payload;
        if (action.payload.edit) {
            const form = new FormData();
            form.append("file", action.payload.img);
            const res = yield call(() => axios.post("http://localhost:8080/api/files/video", form));
            data.url = res.data;
        }

        yield call(() => axios.put(`http://localhost:8080/video/${action.payload.id}`, {url:data.url}));
        yield put(getVideo());
        yield put(setImg(""));
    } catch (e) {
        alert("Some error");
    }
}

export function* vdSaga() {
    yield takeLatest(getVideo().type, workGetVd);
    yield takeLatest(saveVd().type, workPostVd);
    yield takeLatest(deleteVd().type, workDeleteVd);
    yield takeLatest(editVd().type, workEditVd);
}
