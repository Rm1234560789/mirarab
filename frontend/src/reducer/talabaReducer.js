import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    talaba: []

}
const slice = createSlice({
    name: "talaba",
    initialState: initialState,
    reducers: {
        get: () => {

        },
        getSucces: (state, action) => {
            state.talaba = action.payload
        },
        saveT: () => {},
        deleteT: () => {},
        updateT: () => {}
    }
});

export const {
    get,getSucces,saveT,deleteT,updateT
} = slice.actions;
export default slice;