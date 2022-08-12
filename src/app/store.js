/**
 * store
 */

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import apiSlice from './apiSlice';
import appSlice from './appSlice';

const initialState = {};

export const makeStore = () => configureStore({
  reducer: {
    appSlice: appSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});

export const wrapper = createWrapper(makeStore, { debug: true });
