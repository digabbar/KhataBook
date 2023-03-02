import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductAsync,
  resetStatus,
  selectStatus,
  selectError,
} from "./productsSlice";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductAsync({ name, price }));
  };

  const handleReset = () => {
    dispatch(resetStatus());
  };

  return (
    <div>
      {status === "succeeded" && (
        <div>
          Product added successfully!
          <button onClick={handleReset}>OK</button>
        </div>
      )}

      {status === "failed" && (
        <div>
          Error: {error}
          <button onClick={handleReset}>OK</button>
        </div>
      )}

      {status === "idle" && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">Add Product</button>
        </form>
      )}

      {status === "loading" && <div>Loading...</div>}
    </div>
  );
}

export default AddProduct;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { addProduct } from '../api/products';

// const initialState = {
//   status: 'idle', // can be idle, loading, succeeded, or failed
//   error: null
// };

// export const addProductAsync = createAsyncThunk(
//   'products/addProduct',
//   async ({ name, price }, { rejectWithValue }) => {
//     try {
//       const response = await addProduct({ name, price });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     resetStatus: (state) => {
//       state.status = 'idle';
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(addProductAsync.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(addProductAsync.fulfilled, (state) => {
//         state.status = 'succeeded';
//       })
//       .addCase(addProductAsync.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   }
// });

// export const { resetStatus } = productsSlice.actions;

// export const selectStatus = (state) => state.products.status;
// export const selectError = (state) => state.products.error;

// export default productsSlice.reducer;
