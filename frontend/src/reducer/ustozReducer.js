import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    ustoz: []

}
const slice = createSlice({
    name: "ustoz",
    initialState: initialState,
    reducers: {
        get: () => {

        },
        getSuccesss: (state, action) => {
            state.ustoz = action.payload
        },
        saveU: () => {},
        deleteU: () => {},
        updateU: () => {}
    }
});

export const {
    get,getSuccesss,saveU,deleteU,updateU
} = slice.actions;
export default slice;