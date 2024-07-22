import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    madrasa: [],
    info:{},
    selectedMadrasa:{}
}
const slice = createSlice({
    name: "madrasa",
    initialState: initialState,
    reducers: {
        saveMadrasa: () => {},
        deleteMadrasa: () => {},
        updateMadrasa: () => {},
        getInfo:() => {},
        getInfoSucces: (state, action) => {
            state.info=action.payload
        },
        fetchSelectedMadrasa(){},
        fetchSelectedMadrasaSuccess(state,action){
            state.selectedMadrasa = action.payload
        }
    }
});

export const {
   saveMadrasa,deleteMadrasa,updateMadrasa,getInfo,getInfoSucces,
    fetchSelectedMadrasa,
    fetchSelectedMadrasaSuccess
} = slice.actions;
export default slice;