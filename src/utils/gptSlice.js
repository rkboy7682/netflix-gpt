import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggelGptSerachView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const { toggelGptSerachView } = gptSlice.actions;
export default gptSlice.reducer;
