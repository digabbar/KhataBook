import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice";
import NotificationReducer from "./notificationSlice";
export const store = configureStore({
  reducer: {
    expense: expenseReducer,
    notification: NotificationReducer,
  },
});
