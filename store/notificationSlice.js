// notificationSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      state.message = action.payload;
    },
    hideNotification(state) {
      state.message = null;
    },
  },
});

export const { setNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
