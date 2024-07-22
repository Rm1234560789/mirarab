import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news: [],
    izohlar: [],
    manaviyat: [],
    professor: [],
    maqola: [],
    madrasa: [],
    imgInp: "",
    displayImg: "",
    name: "News",
    info:{}
};

const slice = createSlice({
    name: "news",
    initialState: initialState,
    reducers: {
        getNews: () => {},
        getNewsSucces: (state, action) => {
            state.news = action.payload;
        },
        getIzohlar: () => {},
        getIzohlarSucces: (state, action) => {
            state.izohlar = action.payload;
        },
        getManaviyat: () => {},
        getManaviyatSucces: (state, action) => {
            state.manaviyat = action.payload.body;
        },
        getProfessor: () => {},
        getProfessorSucces: (state, action) => {
            state.professor = action.payload;
        },
        getMaqola: () => {},
        getMaqolaSucces: (state, action) => {
            state.maqola = action.payload;
        },
        getMadrasa: () => {},
        getMadrasaSucces: (state, action) => {
            state.madrasa = action.payload;
        },
        saveNews: () => {},
        setImg: (state, action) => {
            state.imgInp=action.payload;
        },
        setDisplayImg: (state, action) => {
            console.log(action.payload)
            state.displayImg = action.payload;
        },
        deleteNews: () => {},
        updateNews: () => {},
        getInfoSuccess:(state,action)=>{
            state.info=action.payload
        },
        getInfo:()=>{
        },
        postIzoh(){}
    }
});

export const {
    getNews, getNewsSucces, getIzohlar, getIzohlarSucces, getManaviyat, getManaviyatSucces,
    getProfessor, getProfessorSucces, getMaqola, getMaqolaSucces, getMadrasa, getMadrasaSucces,
    saveNews, setDisplayImg, setImg, deleteNews, updateNews, getInfo,getInfoSuccess,
    postIzoh
} = slice.actions;

export default slice;
