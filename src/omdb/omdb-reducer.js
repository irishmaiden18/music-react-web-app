import {createSlice} from "@reduxjs/toolkit";
import {findMovieBySearchTerm} from "./omdb-service";
import {findMovieByImdbIdThunk, findMovieBySearchTermThunk} from "./omdb-thunks";

const initialState = {
    movies: [],
    loading: false,
    details: null
}

const omdbReducer = createSlice({
    name: 'omdb',
    initialState,
    extraReducers: {
        [findMovieBySearchTermThunk.fulfilled]: (state, action) => {
            state.movies = action.payload
        },
        [findMovieByImdbIdThunk.fulfilled]: (state, action) => {
            state.details = action.payload
        }
    }
})

export default omdbReducer.reducer