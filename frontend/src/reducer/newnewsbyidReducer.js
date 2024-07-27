import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: null,
};

const newnewsbyidSlice = createSlice({
    name: "newnewsid",
    initialState,
    reducers: {
        getInfo: (state, action) => {},
        getInfoSuccess: (state, action) => {
            state.info = action.payload;
        },
    },
});

export const { getInfo, getInfoSuccess } = newnewsbyidSlice.actions;
export default newnewsbyidSlice.reducer;
