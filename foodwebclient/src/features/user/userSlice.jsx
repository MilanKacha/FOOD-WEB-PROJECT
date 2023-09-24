import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLoggedInUser } from "./userApi";

const initialState = {
  userOrders: [],
  status: "idle",
  userInfo: null,
};

export const fetchLoggedInUserAsync = createAsyncThunk(
  "user/fetchLoggedInUser",
  async () => {
    const response = await fetchLoggedInUser();
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userInfo = action.payload;
      });
  },
});

export const { increment } = userSlice.actions;
export const selectUserInfo = (state) => state.user.userInfo;
export default userSlice.reducer;
