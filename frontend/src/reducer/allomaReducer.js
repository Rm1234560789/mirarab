import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    alloma: [],
    allomaget:{}
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
        updateAlloma: () => {},
        getAllomaget: () => {},
        getAllomagetSuccess: (state, action) => {
            state.allomaget = action.payload
        }
    }
});

export const {
    getAlloma,getAllomaSuccess,saveAlloma,deleteAlloma,updateAlloma,getAllomagetSuccess,getAllomaget
} = slice.actions;
export default slice;