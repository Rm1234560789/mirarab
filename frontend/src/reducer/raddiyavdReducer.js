import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    raddiyaVd: []

}
const slice = createSlice({
    name: "raddiyaVd",
    initialState: initialState,
    reducers: {
        getVideo: () => {

        },
        getVideoSucces: (state, action) => {
            state.raddiyaVd = action.payload
        },
        saveVd: () => {
        },
        deleteVd: () => {},
        editVd: () =>{}
    }
});

export const {
    getVideo, getVideoSucces, saveVd,deleteVd,editVd
} = slice.actions;
export default slice;