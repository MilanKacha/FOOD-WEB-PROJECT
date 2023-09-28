import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./orderApi";
import Cookies from "js-cookie";

const initialState = {
  orders: [],
  status: "idle",
  currentOrder: JSON.parse(localStorage.getItem("currentOrder")) || null,
  totalOrders: 0,
};

export const createOrderAsync = createAsyncThunk(
  "order/createOrder",
  async (order) => {
    const response = await createOrder(order);
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        // push in all order array
        state.orders.push(action.payload);
        // latest order (action.payload)
        state.currentOrder = action.payload;
        localStorage.setItem("currentOrder", JSON.stringify(action.payload));
      });
  },
});

// export const { resetOrder } = orderSlice.actions;
//direct thunk vagar dispatch thay

export const selectCurrentOrder = (state) => state.order.currentOrder;
export const selectOrders = (state) => state.order.orders;

export default orderSlice.reducer;
