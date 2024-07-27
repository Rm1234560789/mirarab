import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    fikrmulohaza: []

}
const slice = createSlice({
    name: "fikrmulohaza",
    initialState: initialState,
    reducers: {
        getFikr: () => {
        },
        getFikrSuccess:(state,action)=>{
            state.fikrmulohaza = action.payload

        },
        saveFikr: () => {},
        deleteFikr: () => {},
        updateFikr: () => {}
    }
});

export const {
    getFikr,getFikrSuccess,saveFikr,deleteFikr,updateFikr
} = slice.actions;
export default slice;