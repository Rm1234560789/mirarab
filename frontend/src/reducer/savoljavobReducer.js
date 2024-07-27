import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    savoljavob: []

}
const slice = createSlice({
    name: "savoljavob",
    initialState: initialState,
    reducers: {
        getSavol: () => {
        },
        getSavolSuccess:(state,action)=>{
            state.savoljavob = action.payload
        },
        saveSavol: () => {},
        deleteSavol: () => {},
        updateSavol: () => {}
    }
});

export const {
    getSavol,getSavolSuccess,saveSavol,deleteSavol,updateSavol
} = slice.actions;
export default slice;