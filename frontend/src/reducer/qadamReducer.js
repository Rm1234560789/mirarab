import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    qadam: []

}
const slice = createSlice({
    name: "qadam",
    initialState: initialState,
    reducers: {
        getQadam: () => {

        },
        getQadamSucces: (state, action) => {
            state.qadam = action.payload
        },
        saveQadam: () => {},
        deleteQadam: () => {},
        updateQadam: () => {}
    }
});

export const {
   getQadam,getQadamSucces,saveQadam,deleteQadam,updateQadam
} = slice.actions;
export default slice;