import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
  currentPage: "Detections",
  detections: [],
};

export const systemSlice = createSlice({
  name: "sys",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    setLogout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload.currentPage;
    },
    setDetections: (state, action) => {
      state.detections = action.payload.detections;
    },
  },
});

export const { setLogin, setLogout, setCurrentPage, setDetections } =
  systemSlice.actions;
export default systemSlice.reducer;
