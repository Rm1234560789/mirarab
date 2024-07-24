import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    qadam: [],
    currentQadam:{
    id:"",
    description:"",
    title:"",
    img:""
    }

}
const slice = createSlice({
    name: "qadam",
    initialState: initialState,
    reducers: {
        getQadam: () => {

        },
        getQadamSucces: (state, action) => {
            state.qadam = action.payload
        },
        saveQadam: () => {},
        deleteQadam: () => {},
        updateQadam: () => {},
        getCurrentQadam(){},
        getCurrentQadamSucces: (state, action) => {
            console.log("cccc")
            console.log(action.payload)
            state.currentQadam = action.payload
        }
    }
});

export const {
   getQadam,getCurrentQadam,getCurrentQadamSucces,getQadamSucces,saveQadam,deleteQadam,updateQadam
} = slice.actions;
export default slice;