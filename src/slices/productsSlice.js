import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  productsLoadingStatus: 'idle',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', request => {
  return request('https://json-server-online.vercel.app/products');
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.productsLoadingStatus = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsLoadingStatus = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, state => {
        state.productsLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const { reducer } = productsSlice;

export default reducer;
