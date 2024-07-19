import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   qabul: []

}
const slice = createSlice({
    name: "qabul",
    initialState: initialState,
    reducers: {
        getQabul: () => {

        },
        getQabulSucces: (state, action) => {
            state.qabul = action.payload
        },
        saveQabul: () => {},
        deleteQabul: () => {},
        updateQabul: () => {}
    }
});

export const {
    getQabul,getQabulSucces,saveQabul,deleteQabul,updateQabul
} = slice.actions;
export default slice;