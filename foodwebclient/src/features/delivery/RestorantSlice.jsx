import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllRestorant,
  fetchAllProductsByRestorantId,
  fetchRestaurantById,
  fetchAllProduct,
} from "./RestorantApi";

const initialState = {
  products: [],
  restorants: [],
  status: "idle",
  selectedRestaurant: [],
  productsByRestorantId: [],
};

export const fetchAllRestorantAsync = createAsyncThunk(
  "restorant/fetchAllRestorants",
  async (subcategory) => {
    try {
      const response = await fetchAllRestorant(subcategory);
      return response; // Return the response directly
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAllProductAsync = createAsyncThunk(
  "restorant/fetchAllProducts",
  async () => {
    try {
      const response = await fetchAllProduct();
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
    setProductsubcategories: (state, action) => {
      state.productsubcategories = action.payload;
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
          state.productsByRestorantId = action.payload.data;
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
      })
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const { setProductsubcategories } = restorantSlice.actions;

export const selectAllRestorants = (state) => state.restorant.restorants;
export const selectAllProductsByRestaurantId = (state) =>
  state.restorant.productsByRestorantId;
export const selectRestaurantById = (state) =>
  state.restorant.selectedRestaurant;
export const selectedAllProducts = (state) => state.restorant.products;

export default restorantSlice.reducer;
