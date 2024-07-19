import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    madrasa: [],
    info:{}

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
        }
    }
});

export const {
   saveMadrasa,deleteMadrasa,updateMadrasa,getInfo,getInfoSucces
} = slice.actions;
export default slice;