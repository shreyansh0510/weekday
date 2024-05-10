import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../slices/filterslice";

const store = configureStore({
  reducer: {
    // jobs: jobReducer,
    filters: filterReducer,
  },
});

export default store;
