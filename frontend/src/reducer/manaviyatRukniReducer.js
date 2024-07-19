import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    manaviyatRukni: []

}
const slice = createSlice({
    name: "manaviyatRukni",
    initialState: initialState,
    reducers: {
        saveManaviyatRukni: () => {},
        deleteManaviyatRukni: () => {},
        updateManaviyatRukni: () => {}
    }
});

export const {
    saveManaviyatRukni,deleteManaviyatRukni,updateManaviyatRukni
} = slice.actions;
export default slice;