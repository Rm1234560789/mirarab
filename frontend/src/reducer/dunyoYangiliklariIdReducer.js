import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    worldnews: [], // Ensure this is an empty array instead of null
    info: null,
};

const worldnewsidSlice = createSlice({
    name: "worldnewsid",
    initialState,
    reducers: {
        getInfo: (state, action) => {},
        getInfoSuccess: (state, action) => {
            state.info = action.payload; // Update state correctly
        },
        getWorldNewsSuccess: (state, action) => {
            state.worldnews = action.payload; // Ensure worldnews data is populated
        }
    },
});

export const { getInfo, getInfoSuccess, getWorldNewsSuccess } = worldnewsidSlice.actions;
export default worldnewsidSlice.reducer;
