import {call, takeLatest, put} from "redux-saga/effects";
import axios from "axios";
import {setImg} from "../reducer/newsReducer.js";
import {deleteU, get, getSuccesss, saveU, updateU} from "../reducer/ustozReducer.js";
import {
    deleteTurliMavzu,
    getSuccessTurliMavzular,
    getTurliMavzular,
    saveTurliMavzu, updateTurliMavzu
} from "../reducer/turliMavzularReducer.js";


export function* workGetTurliMavzular() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/api/turli/mavzu",
            method: "GET"
        }));
        yield put(getSuccessTurliMavzular(res.data));
    } catch (e) {
        alert("some error");
    }
}

export function* workPostTurliMavzular(action) {
    console.log(action.payload)
    const form = new FormData();
    form.append("file", action.payload.file);
    const res = yield call(() => axios({
        url: "http://localhost:8080/api/files/img",
        method: "POST",
        data: form
    }));
    const response = yield call(() => axios({
        url: "http://localhost:8080/api/turli/mavzu",
        method: "POST",
        data: {title: action.payload.title, description: action.payload.description, img: res.data},
    }));
    yield put(getTurliMavzular());
}

export function* workDeleteTurliMavzular(action) {
    try {
        const res = yield call(() => axios({
            url: `http://localhost:8080/api/turli/mavzu?id=${action.payload}`,
            method: "DELETE"
        }));
        yield put(getTurliMavzular(res.data));
    } catch (e) {
        alert("some error");
    }
}

export function* workPutTurliMavzular(action) {
    let img = "";
    if (action.payload.file === "") {
        img = action.payload.currentItem.img;
    }
    else {
        const form = new FormData();
        form.append("file", action.payload.file);
        const res = yield call(() => axios({
            url: "http://localhost:8080/api/files/img",
            method: "POST",
            data: form
        }));
        img = res.data
    }

    yield call(() => axios({
        url: `http://localhost:8080/api/turli/mavzu?id=${action.payload.id}`,
        method: "PUT",
        data: {title: action.payload.title, description: action.payload.description, img: img},
    }));
    yield put(getTurliMavzular());
}


export function* turliMavzularSaga() {
    yield takeLatest(getTurliMavzular().type, workGetTurliMavzular);
    yield takeLatest(deleteTurliMavzu().type, workDeleteTurliMavzular);
    yield takeLatest(saveTurliMavzu().type, workPostTurliMavzular);
    yield takeLatest(updateTurliMavzu().type, workPutTurliMavzular);
}
