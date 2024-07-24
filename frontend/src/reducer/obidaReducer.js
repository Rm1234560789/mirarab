import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    obida: [],
    currentObida: {}

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
        saveObida: () => {
        },
        deleteObida: () => {
        },
        updateObida: () => {
        },
        fetchCurrentObida() {
        },
        fetchCurrentObidaSuccess(state, action) {
            state.currentObida = action.payload
        }
    }
});

export const {
    fetchCurrentObida, fetchCurrentObidaSuccess, getObida, getObidaSucces, saveObida, deleteObida, updateObida
} = slice.actions;
export default slice;