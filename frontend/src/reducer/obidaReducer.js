import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    obida: []

}
const slice = createSlice({
    name: "obida",
    initialState: initialState,
    reducers: {
        getObida: () => {

        },
        getObidaSucces: (state, action) => {
            state.obida = action.payload
        },
        saveObida: () => {},
        deleteObida: () => {},
        updateObida: () => {}
    }
});

export const {
  getObida,getObidaSucces,saveObida,deleteObida,updateObida
} = slice.actions;
export default slice;