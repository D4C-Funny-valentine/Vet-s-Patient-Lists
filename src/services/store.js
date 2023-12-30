import { configureStore } from "@reduxjs/toolkit";
import { patientApi } from "./api/patientApi";
import modalSlice from "./slice/modalSlice";
import filterSlice from "./slice/filterSlice";
import confirmModalSlice from "./slice/confirmModal";
import alertSlice from "./slice/alertSlice";

export const store = configureStore({
  reducer: {
    [patientApi.reducerPath]: patientApi.reducer,
    modal: modalSlice,
    filterData: filterSlice,
    confirmModal: confirmModalSlice,
    alert: alertSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(patientApi.middleware),
});
