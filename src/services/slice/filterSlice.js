import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientsFilterData: [],
};

export const filterSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addFilterData: (state, { payload }) => {
      state.patientsFilterData = payload;
    },
  },
});

export const { addFilterData } = filterSlice.actions;

export default filterSlice.reducer;
