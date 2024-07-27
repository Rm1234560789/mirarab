import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import {combineReducers} from "redux";
import newsReducer from "../reducer/newsReducer";
import rootSaga from "../saga/rootSaga";
import vdReducer from "../reducer/vdReducer.js";
import rahbariyatReducer from "../reducer/rahbariyatReducer.js";
import maqolaReducer from "../reducer/maqolaReducer.js";
import manaviyatRukniReducer from "../reducer/manaviyatRukniReducer.js";
import madrasaHqReducer from "../reducer/madrasaHqReducer.js";
import professorReducer from "../reducer/professorReducer.js";
import buxoroReducer from "../reducer/buxoroReducer.js";
import obidaReducer from "../reducer/obidaReducer.js";
import qadamReducer from "../reducer/qadamReducer.js";
import allomaReducer from "../reducer/allomaReducer.js";
import qabulReducer from "../reducer/qabulReducer.js";
import shartnomaReducer from "../reducer/shartnomaReducer.js";
import xorijReducer from "../reducer/xorijReducer.js";
import videoReducer from "../reducer/videoReducer.js";
import audioReducer from "../reducer/audioReducer.js";
import raddiyavdReducer from "../reducer/raddiyavdReducer.js";
import ustozReducer from "../reducer/ustozReducer.js";
import talabaReducer from "../reducer/talabaReducer.js";
import newnewsReducer from "../reducer/newnewsReducer.js";
import newnewsbyidReducer from "../reducer/newnewsbyidReducer.js";
import dunyoYangiliklariReducer from "../reducer/dunyoYangiliklariReducer.js";
import {worldnewsid} from "../saga/dunyoYangiliklariIdSaga.js";
import dunyoYangiliklariIdReducer from "../reducer/dunyoYangiliklariIdReducer.js";
import savoljavobReducer from "../reducer/savoljavobReducer.js";
import fikrmulohazaReducer from "../reducer/fikrmulohazaReducer.js";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    newsReducer:newsReducer.reducer,
    vdReducer:vdReducer.reducer,
    rahbariyatReducer:rahbariyatReducer.reducer,
    maqolaReducer:maqolaReducer.reducer,
    manaviyatRukniReducer:manaviyatRukniReducer.reducer,
    madrasaHqReducer:madrasaHqReducer.reducer,
    professorReducer:professorReducer.reducer,
    buxoroReducer:buxoroReducer.reducer,
    obidaReducer:obidaReducer.reducer,
    qadamReducer:qadamReducer.reducer,
    allomaReducer:allomaReducer.reducer,
    qabulReducer:qabulReducer.reducer,
    shartnomaReducer:shartnomaReducer.reducer,
    xorijReducer:xorijReducer.reducer,
    videoReducer:videoReducer.reducer,
    audioReducer:audioReducer.reducer,
    raddiyavdReducer:raddiyavdReducer.reducer,
    ustozReducer:ustozReducer.reducer,
    talabaReducer:talabaReducer.reducer,
    newnewsReducer:newnewsReducer.reducer,
    newnewsid: newnewsbyidReducer,
    dunyoYangiliklariReducer:dunyoYangiliklariReducer.reducer,
    worldnewsid:dunyoYangiliklariIdReducer,
    savoljavobReducer:savoljavobReducer.reducer,
    fikrmulohazaReducer:fikrmulohazaReducer.reducer
})


const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware)
    }
})
sagaMiddleware.run(rootSaga);

export default store;
