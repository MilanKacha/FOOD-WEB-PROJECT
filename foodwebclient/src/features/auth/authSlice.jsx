import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, logOut, logIn } from "./authApi";
import Cookies from "js-cookie";

const initialState = {
  loggedInUserToken: Cookies.get("jwt") || null,
  status: "idle",
  error: null,
  // jyare token save thay pa6igame te link manually no kule
  userChecked: false,
};

export const createUserAsync = createAsyncThunk(
  "user/singUp",
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const logInUserAsync = createAsyncThunk(
  "user/loginUser",
  async (logInInfo, { rejectWithValue }) => {
    // rejectWithValue is in build function
    try {
      // The value we return becomes the `fulfilled` action payload
      const response = await logIn(logInInfo);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);
export const logOutAsync = createAsyncThunk("user/logOut", async () => {
  const response = await logOut();
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload;
      })
      .addCase(logInUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logInUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload;
      })
      .addCase(logInUserAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload; // comes from rejectedWithValue
      })
      .addCase(logOutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logOutAsync.fulfilled, (state, action) => {
        state.status = "idel";
        state.loggedInUserToken = null;
      });
  },
});

export const selectLoggedInUser = (state) => state.auth.loggedInUserToken;

export const { increment } = authSlice.actions;
export default authSlice.reducer;
