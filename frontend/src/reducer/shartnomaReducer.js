import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    shartnoma: []

}
const slice = createSlice({
    name: "shartnoma",
    initialState: initialState,
    reducers: {
        getShartnoma: () => {

        },
        getShartnomaSucces: (state, action) => {
            state.shartnoma = action.payload
        },
        saveShartnoma: () => {},
        deleteShartnoma: () => {},
        updateShartnoma: () => {}
    }
});

export const {
    getShartnoma,getShartnomaSucces,saveShartnoma,deleteShartnoma,updateShartnoma
} = slice.actions;
export default slice;