import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../hooks/http.hook';

const initialState = {
  products: [],
  productsLoadingStatus: 'idle',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', request => {
  // const { request } = useHttp();
  return request('http://localhost:3001/products');
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

const { actions, reducer } = productsSlice;

export default reducer;
export const { productsFetching, productsFetched, productsFetchingError } = actions;
