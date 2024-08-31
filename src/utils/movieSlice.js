import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    addTrailer: null,
    popularMovies: null,
    upComingMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopratedMovies: (state, action) => {
      state.topratedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.addTrailer = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addTopratedMovies,
  addUpComingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
