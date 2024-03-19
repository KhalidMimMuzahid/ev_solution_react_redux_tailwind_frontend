import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appApi } from "./services/appApi/appApi";
import productsReducer from "./features/products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    [appApi.reducerPath]: appApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});
setupListeners(store.dispatch);
