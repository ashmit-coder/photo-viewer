import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducer/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  // Other store configuration options, such as middleware or dev tools extension.
});

export default store;
