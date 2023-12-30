import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openConfirmModal: false,
  confirmId: null,
};

export const confirmModalSlice = createSlice({
  name: "confirm",
  initialState,
  reducers: {
    setOpenConfirmModal: (state, { payload }) => {
      state.openConfirmModal = payload.open;
      state.confirmId = payload?.confirmId;
    },
  },
});

export const { setOpenConfirmModal } = confirmModalSlice.actions;

export default confirmModalSlice.reducer;
