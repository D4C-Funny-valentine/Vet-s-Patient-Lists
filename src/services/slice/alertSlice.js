import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAlert: false,
  text: "added",
};

export const alertSlice = createSlice({
  name: "confirm",
  initialState,
  reducers: {
    setOpenAlert: (state, { payload }) => {
      state.openAlert = payload.open;
      state.text = payload?.text;
    },
  },
});

export const { setOpenAlert } = alertSlice.actions;

export default alertSlice.reducer;
