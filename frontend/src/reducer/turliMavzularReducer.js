import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    turliMavzular: [],
    file: "",
    editing: false,
    currentItem: {}

}
const slice = createSlice({
    name: "turliMavzular",
    initialState: initialState,
    reducers: {
        getTurliMavzular: () => {

        },
        getSuccessTurliMavzular: (state, action) => {
            state.turliMavzular = action.payload
        },
        saveTurliMavzu: () => {
        },
        deleteTurliMavzu: () => {
        },
        updateTurliMavzu: () => {
        },
        setFile(state, action) {
            state.file = action.payload
        },
        setEditing(state, action) {
            state.editing = action.payload
        },
        setCurrentItem(state, action) {
            state.currentItem = action.payload
        }
    }
});

export const {
    setCurrentItem,
    setEditing,
    setFile,
    getTurliMavzular,
    getSuccessTurliMavzular,
    saveTurliMavzu,
    deleteTurliMavzu,
    updateTurliMavzu
} = slice.actions;
export default slice;