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
    xorijReducer:xorijReducer.reducer
})


const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware)
    }
})
sagaMiddleware.run(rootSaga);

export default store;
