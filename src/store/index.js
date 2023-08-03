 import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, addMovie, removeMovie } from "./slices/Playlist/MovieSlice";
import { addSong, removeSong, songsReducer } from "./slices/Playlist/SongSlice";
import { changeMenu } from "./slices/NavSlices";
import { reset } from "./action";
import { NavSlicesReducer } from "./slices/NavSlices";
import { CarReducer, addCar, removeCar, changeSearchTerm } from "./slices/cars/CarSlice";
import { FormReducer, changeName, changeCost } from "./slices/cars/FormSlice";

 

 const store = configureStore({
    reducer : {
        songs : songsReducer,
        movies : moviesReducer,
        navs : NavSlicesReducer,
        cars : CarReducer,
        form : FormReducer
    }
 });

export  { 
    addSong, 
    removeSong, 
    addMovie, 
    removeMovie, 
    changeMenu, 
    reset, 
    store ,
    addCar ,
    removeCar ,
    changeSearchTerm ,
    changeName, 
    changeCost
};
