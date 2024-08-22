import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slices/productsSlice';
import filtersReducer from '../slices/filtersSlice';

const store = configureStore({
  reducer: { productsReducer, filtersReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
