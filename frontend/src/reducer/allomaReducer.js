import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    alloma: []

}
const slice = createSlice({
    name: "alloma",
    initialState: initialState,
    reducers: {
        getAlloma: () => {

        },
        getAllomaSuccess: (state, action) => {
            state.alloma = action.payload
        },
        saveAlloma: () => {},
        deleteAlloma: () => {},
        updateAlloma: () => {}
    }
});

export const {
    getAlloma,getAllomaSuccess,saveAlloma,deleteAlloma,updateAlloma
} = slice.actions;
export default slice;