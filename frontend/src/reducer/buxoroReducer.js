import {createSlice} from "@reduxjs/toolkit";
import oneBuxoroIslom from "../pages/buxoro/OneBuxoroIslom.jsx";

const initialState = {
    islom: [],
    oneIslomBuxoro: {}
}
const slice = createSlice({
    name: "islom",
    initialState: initialState,
    reducers: {
        getIslom: () => {
        },
        getIslomSuccess: (state, action) => {
            state.islom = action.payload
        },
        saveIslom: () => {
        },
        deleteIslom: () => {
        },
        updateIslom: () => {
        },
        getOneIslomBuxoro() {
        },
        getOneIslomBuxoroSuccess(state,action){
            state.oneIslomBuxoro = action.payload
        }
    }
});

export const {
    getOneIslomBuxoroSuccess,getOneIslomBuxoro, getIslom, getIslomSuccess, saveIslom, deleteIslom, updateIslom
} = slice.actions;
export default slice;