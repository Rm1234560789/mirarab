import {call, takeLatest, put} from "redux-saga/effects";
import axios from "axios"
import {
    getNews,
    getNewsSucces,
    getIzohlar,
    getIzohlarSucces,
    getManaviyat,
    getManaviyatSucces,
    getProfessor,
    getProfessorSucces,
    getMaqola,
    getMaqolaSucces,
    getMadrasa,
    getMadrasaSucces,
    saveNews,
    deleteNews,
    updateNews,
    getInfo,
    getInfoSuccess, setImg, postIzoh, editIzoh
} from "../reducer/newsReducer";

export function* workGetNews() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/news",
            method: "GET"
        }));
        yield put(getNewsSucces(res.data));
    } catch (e) {
        alert("some error");
    }
}

export function* workGetMaqola() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/maqola",
            method: "GET"
        }));
        yield put(getMaqolaSucces(res.data));
    } catch (e) {
        alert("some error");
    }
}

export function* workGetManaviyat() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/manaviyat",
            method: "GET"
        }));
        yield put(getManaviyatSucces(res.data));
    } catch (e) {
        alert("some error");
    }
}

export function* workGetMadrasa() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/madrasahq",
            method: "GET"
        }));
        yield put(getMadrasaSucces(res.data));
    } catch (e) {
        alert("some error");
    }
}

export function* workGetProfessor() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/professor",
            method: "GET"
        }));
        yield put(getProfessorSucces(res.data));
    } catch (e) {
        alert("some error");
    }
}

export function* workGetIzoh() {
    try {
        const res = yield call(() => axios({
            url: "http://localhost:8080/izohlar",
            method: "GET"
        }));
        yield put(getIzohlarSucces(res.data));
    } catch (e) {
        alert("some error");
    }
}


export function* workPostNews(action) {

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
        url: "http://localhost:8080/news",
        method: "POST",
        data: data,
    }));
    yield put(getNews());
}

export function* workDeleteNews(action) {
    try {
        yield call(() => axios.delete(`http://localhost:8080/news/${action.payload}`));
        yield put(getNews());
    } catch (e) {
        alert("Some error");
    }
}

export function* workUpdateNews(action) {
    console.log(action.payload)
    let data = action.payload;
    if (action.payload.edit === true) {
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
        url: `http://localhost:8080/news/${action.payload.id}`,
        method: "PUT",
        data: data,
    }));
    yield put(getNews())
    yield put(setImg(""))
}


export function* getNewsById(action) {

    let id = action.payload;
    console.log(id)
    const res = yield call(() => axios({
        url: `http://localhost:8080/news/${id}`,
        method: "GET"
    }))
    yield put(getInfoSuccess(res.data))

}

export function* workPostIzoh(action) {
    console.log(action.payload)
    const res = yield call(() => axios({
        url: `http://localhost:8080/izohlar`,
        method: "POST",
        data: action.payload.data
    }).then(()=>{action.payload.reset()}))
    yield put(getIzohlar())

}
export function* workEditIzoh(action) {
    console.log(action.payload)
    yield call(() => axios({
        url: `http://localhost:8080/izohlar/${action.payload.id}`,
        method: "PUT",
    }))
    yield put(getIzohlar())
}

export function* newsSaga() {
    yield takeLatest(getNews().type, workGetNews);
    yield takeLatest(getIzohlar().type, workGetIzoh);
    yield takeLatest(getManaviyat().type, workGetManaviyat);
    yield takeLatest(getProfessor().type, workGetProfessor);
    yield takeLatest(getMaqola().type, workGetMaqola);
    yield takeLatest(getMadrasa().type, workGetMadrasa);
    yield takeLatest(saveNews().type, workPostNews);
    yield takeLatest(deleteNews().type, workDeleteNews);
    yield takeLatest(updateNews().type, workUpdateNews);
    yield takeLatest(getInfo().type, getNewsById);
    yield takeLatest(postIzoh().type, workPostIzoh);
    yield takeLatest(editIzoh().type,workEditIzoh)
}
