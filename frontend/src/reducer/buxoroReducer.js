import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    islom: []

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
        saveIslom: () => {},
        deleteIslom: () => {},
        updateIslom: () => {}
    }
});

export const {
    getIslom,getIslomSuccess,saveIslom,deleteIslom,updateIslom
} = slice.actions;
export default slice;