import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../../action";

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            //add song
            state.push(action.payload)
        },
        removeSong(state, action) {
            //
            // const newState = state.filter((item) => item !== action.payload);
            // return newState;
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        })
    }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;