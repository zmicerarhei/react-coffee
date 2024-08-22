import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHttp } from '../hooks/http.hook';

const initialState = {
  filters: [],
  filtersLoadingStatus: 'idle',
  activeFilter: 'All',
  searchValue: '',
};

export const fetchFilters = createAsyncThunk('filters/fetchFilters', request => {
  //   const { request } = useHttp();
  return request('https://json-server-online.vercel.app/filters');
});

const filtersSlice = createSlice({
  initialState,
  name: 'filters',
  reducers: {
    filtersFetching: state => {
      state.filtersLoadingStatus = 'loading';
    },
    filtersFetched: (state, action) => {
      state.filtersLoadingStatus = 'idle';
      state.filters = action.payload;
    },
    filtersFetchingError: state => {
      state.filtersLoadingStatus = 'error';
    },
    activeFilterChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
    searchChanged: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFilters.pending, state => {
        state.filtersLoadingStatus = 'loading';
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filtersLoadingStatus = 'idle';
        state.filters = action.payload;
      })
      .addCase(fetchFilters.rejected, state => {
        state.filtersLoadingStatus = 'error';
      });
  },
});

const { actions, reducer } = filtersSlice;

export default reducer;

export const { filtersFetching, filtersFetched, filtersFetchingError, activeFilterChanged, searchChanged } = actions;
