import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maqola: [],
    name: "Maqola",
    info:{}
};

const slice = createSlice({
    name: "maqola",
    initialState: initialState,
    reducers: {
        saveMaqola: () => {},
        deleteMaqola: () => {},
        updateMaqola: () => {},
        getInfoSuccess:(state,action)=>{
            console.log(action.payload)
            state.info=action.payload
        },
        getInfo:()=>{
        }
    }
});

export const {
    saveMaqola, deleteMaqola, updateMaqola, getInfo,getInfoSuccess
} = slice.actions;

export default slice;
