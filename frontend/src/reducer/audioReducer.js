import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    audio: []

}
const slice = createSlice({
    name: "audio",
    initialState: initialState,
    reducers: {
        getAudio: () => {

        },
        getAudioSucces: (state, action) => {
            state.audio = action.payload
        },
        saveAudio: () => {
        },
        deleteAudio: () => {},
        editAudio: () =>{}
    }
});

export const {
    getAudio,getAudioSucces,saveAudio,deleteAudio,editAudio
} = slice.actions;
export default slice;