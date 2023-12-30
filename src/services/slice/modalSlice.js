import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  type: "create",
  editId: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.open = payload.open;
      state.type = payload.type;
      state.editId = payload?.editId;
    },
    closeModal: (state, { payload }) => {
      state.open = payload.open;
      state.type = payload.type;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
