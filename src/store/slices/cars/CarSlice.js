import { createSlice, nanoid } from "@reduxjs/toolkit";

const CarSlice = createSlice({
    name : 'car',
    initialState : {
        searchTerm : "",
        data : []
    },
    reducers : {
        addCar : (state, action) => {
            state.data.push({
                ...action.payload,
                id : nanoid()
            });
        },
        removeCar : (state, action) => {
            
            const newState =  state.data.filter((item) => item.id !== action.payload);
            console.log({newState})
            state.data = newState;
        },
        changeSearchTerm : (state, action) => {
            state.searchTerm = action.payload;
        }
    }
});

export const  { addCar, removeCar, changeSearchTerm } = CarSlice.actions;
export const CarReducer = CarSlice.reducer;

