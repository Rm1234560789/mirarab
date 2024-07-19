import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    xorij: []

}
const slice = createSlice({
    name: "xorij",
    initialState: initialState,
    reducers: {
        getXorij: () => {

        },
        getXorijSucces: (state, action) => {
            state.xorij = action.payload
        },
        saveXorij: () => {},
        deleteXorij: () => {},
        updateXorij: () => {}
    }
});

export const {
    getXorij,getXorijSucces,saveXorij,deleteXorij,updateXorij
} = slice.actions;
export default slice;