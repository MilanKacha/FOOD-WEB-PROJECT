import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllRestorant,
  fetchAllProductsByRestorantId,
  fetchRestaurantById,
} from "./RestorantApi";

const initialState = {
  products: [],
  restorants: [],
  status: "idle",
  totalItems: 0,
  selectedRestaurant: [],
};

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

export const fetchRestaurantByIdAsync = createAsyncThunk(
  "restaurant/fetchRestaurantById",
  async (id) => {
    const response = await fetchRestaurantById(id);
    return response.data;
  }
);

export const fetchAllProductsByRestorantIdAsync = createAsyncThunk(
  "restorant/fetchAllProductsByRestorantId",
  async (restaurantId) => {
    try {
      const response = await fetchAllProductsByRestorantId(restaurantId);
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
      })
      .addCase(fetchAllProductsByRestorantIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchAllProductsByRestorantIdAsync.fulfilled,
        (state, action) => {
          state.status = "idle";
          state.products = action.payload.data;
        }
      )
      .addCase(fetchAllProductsByRestorantIdAsync.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(fetchRestaurantByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRestaurantByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedRestaurant = action.payload;
      });
  },
});

export const { increment } = restorantSlice.actions;

export const selectAllRestorants = (state) => state.restorant.restorants;
export const selectAllProductsByRestaurantId = (state) =>
  state.restorant.products;
export const selectRestaurantById = (state) =>
  state.restorant.selectedRestaurant;

export default restorantSlice.reducer;
