import { configureStore } from '@reduxjs/toolkit';
import configSlice from './slices/ConfigSlice';
import productSlice from './slices/ProductSlice';
import TRLSlice from './slices/TRLSlice';

export const store = configureStore({
  reducer: {
    config: configSlice,
    product: productSlice,
    trl: TRLSlice,
  },
});