import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    professors: []

}
const slice = createSlice({
    name: "rahbariyat",
    initialState: initialState,
    reducers: {
        saveProff: () => {},
        deleteProff: () => {},
        updateProff: () => {}
    }
});

export const {
    saveProff,deleteProff,updateProff,
} = slice.actions;
export default slice;