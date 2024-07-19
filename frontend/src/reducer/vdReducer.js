import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    video: []

}
const slice = createSlice({
    name: "video",
    initialState: initialState,
    reducers: {
        getVideo: () => {

        },
        getVideoSucces: (state, action) => {
            state.video = action.payload
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