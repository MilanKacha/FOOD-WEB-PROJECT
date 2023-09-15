import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import restorantReducer from "../features/delivery/RestorantSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    restorant: restorantReducer,
  },
});

export default store;
