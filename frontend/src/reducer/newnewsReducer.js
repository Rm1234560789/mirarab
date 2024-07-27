import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    newnews: []

}
const slice = createSlice({
    name: "newnews",
    initialState: initialState,
    reducers: {
        getNewNews: () => {
        },
        getNewNewsSucces:(state,action)=>{
            state.newnews = action.payload

        },
        saveNews: () => {},
        deleteNews: () => {},
        updateNews: () => {}
    }
});

export const {
    getNewNews,getNewNewsSucces,saveNews,deleteNews,updateNews
} = slice.actions;
export default slice;