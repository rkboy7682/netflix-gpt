import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "novies",
  initialState: {
    nowPlayingMovies: null,
    addTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.addTrailer = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addMovieTrailer } = movieSlice.actions;
export default movieSlice.reducer;
