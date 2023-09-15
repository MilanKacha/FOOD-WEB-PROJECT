import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllRestorant } from "./RestorantApi";

const initialState = {
  restorants: [],
  status: "idle",
  totalItems: 0,
};

// for product fetch
export const fetchAllRestorantAsync = createAsyncThunk(
  "restorant/fetchAllRestorants",
  async () => {
    try {
      const response = await fetchAllRestorant();
      return response; // Return the response directly
    } catch (error) {
      console.log(error);
    }
  }
);

export const restorantSlice = createSlice({
  name: "restorant",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRestorantAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllRestorantAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.restorants = action.payload.data;
      })
      .addCase(fetchAllRestorantAsync.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const { increment } = restorantSlice.actions;

export const selectAllRestorants = (state) => state.restorant.restorants;

export default restorantSlice.reducer;
