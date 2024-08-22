// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import banksSlice from './slices/bankSlice';

export const store = configureStore({
  reducer: {
    banksState: banksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;