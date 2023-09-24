import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import restorantReducer from "../features/delivery/RestorantSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    restorant: restorantReducer,
    auth: authReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
