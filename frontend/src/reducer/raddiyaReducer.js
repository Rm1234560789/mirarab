import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    raddiya: []
}
const slice = createSlice({
    name: "raddiya",
    initialState: initialState,
    reducers: {
        get: () => {

        },
        getSucces: (state, action) => {
            state.raddiya = action.payload
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