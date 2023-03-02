// https://expenses-cab62-default-rtdb.firebaseio.com/

import { createAsyncThunk } from "@reduxjs/toolkit";
const url = `https://expenses-cab62-default-rtdb.firebaseio.com/expenses.json`;
export const AddExpense = createAsyncThunk(
  "expense/addExpense",
  async (expense) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    });
    if (!response.ok) {
      throw new Error("Failed to add expense data");
    }
    const data = await response.json();
    const updatedData = {
      ...expense,
      id: data["name"],
    };
    return updatedData;
  }
);
export const fetchExpense = createAsyncThunk(
  "expense/fetchExpense",
  async (expense) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch expense data");
    }
    const data = await response.json();
    console.log(data);
    const updatedData = [];
    for (let key in data) {
      updatedData.push({
        id: key,
        amount: data[key].amount,
        date: data[key].date,
        description: data[key].description,
      });
    }

    return updatedData;
  }
);
