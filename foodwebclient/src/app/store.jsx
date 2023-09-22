import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import restorantReducer from "../features/delivery/RestorantSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    restorant: restorantReducer,
    auth: authReducer,
  },
});

export default store;
