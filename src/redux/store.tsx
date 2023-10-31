import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const configureAppStore = (initialState = {}) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== "production"
  });

  return store;
};

export const store = configureAppStore();

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
