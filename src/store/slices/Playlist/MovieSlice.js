import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../../action";

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            //add song
            state.push(action.payload)
        },
        removeMovie(state, action) {
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

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;