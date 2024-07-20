import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    videos: []

}
const slice = createSlice({
    name: "videos",
    initialState: initialState,
    reducers: {
        getVideo: () => {

        },
        getVideoSucces: (state, action) => {
            state.videos = action.payload
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