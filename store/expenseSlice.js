// expensesSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { AddExpense } from "./expensesAction";
import { fetchExpense } from "./expensesAction";
const initialState = {
  expenses: [],
  status: "idle",
  error: null,
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddExpense.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AddExpense.fulfilled, (state, action) => {
        state.expenses = [action.payload, ...state.expenses];
        state.status = "succeeded";
      })
      .addCase(AddExpense.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchExpense.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchExpense.fulfilled, (state, action) => {
        state.expenses = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchExpense.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const expenseAction = expensesSlice.actions;

export default expensesSlice.reducer;
