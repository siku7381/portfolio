import { createSlice } from "@reduxjs/toolkit";

const NavSlices = createSlice({
    name: "nav",
    initialState: [
        { name: 'Home', href: '/', current: true },
        { name: 'Playlists', href: '/playlist', current: false },
        { name: 'Cars', href: '/car', current: false },
        { name: 'About', href: '/about', current: false },
        //   { name: 'Reports', href: '#', current: false },
    ],
    reducers: {
        changeMenu: (state, action) => {
            const newStateValue = state.map((item) => {
                if (item.name === action.payload) {
                    item.current = true;
                }
                else {
                    item.current = false;
                }
                return item;
            })
            state = newStateValue;
        }
    }
});

export const { changeMenu } = NavSlices.actions;
export const NavSlicesReducer = NavSlices.reducer;