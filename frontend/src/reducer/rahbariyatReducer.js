import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   rahbariyat: []

}
const slice = createSlice({
    name: "rahbariyat",
    initialState: initialState,
    reducers: {
        getRahbariyat: () => {

        },
        getRahbariyatSucces: (state, action) => {
            state.rahbariyat = action.payload
        },
        saveRahbariyat: () => {},
        deleteRahbariyat: () => {},
        updateRahbariyat: () => {}
    }
});

export const {
    getRahbariyat,getRahbariyatSucces,saveRahbariyat,deleteRahbariyat,updateRahbariyat
} = slice.actions;
export default slice;