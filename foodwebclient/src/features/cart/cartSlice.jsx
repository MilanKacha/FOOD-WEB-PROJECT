import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./cartApi";

const initialState = {
  value: 0,
  status: "idle",
  carts: [],
};

// for add ToCart
export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (item) => {
    const response = await addToCart(item);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.carts.push(action.payload);
      });
  },
});

export const { increment } = authSlice.actions;
const selectItems = (state) => state.cart.carts;
export default authSlice.reducer;
