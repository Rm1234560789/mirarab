import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dunyo: []

}
const slice = createSlice({
    name: "dunyo",
    initialState: initialState,
    reducers: {
        getDunyo: () => {
        },
        getDunyoSuccess:(state,action)=>{
            state.dunyo = action.payload

        },
        saveDunyo: () => {},
        deleteDunyo: () => {},
        updateDunyo: () => {}
    }
});

export const {
    getDunyo,getDunyoSuccess,saveDunyo,deleteDunyo,updateDunyo
} = slice.actions;
export default slice;