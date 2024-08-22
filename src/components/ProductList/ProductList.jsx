import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { useHttp } from '../../hooks/http.hook';
import { fetchProducts } from '../../slices/productsSlice';

import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';

import styles from './ProductList.module.scss';

const ProductList = ({ best }) => {
  const { request } = useHttp();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(request));
  }, []);

  const filteredProductsSelector = createSelector(
    state => state.filtersReducer.activeFilter,
    state => state.productsReducer.products,
    state => state.filtersReducer.searchValue,
    (filter, products, searchValue) => {
      if (best) {
        return products.filter(item => item.best === true);
      }
      return products.filter(item => {
        const searchValueLowerCase = searchValue.toLowerCase();
        const itemTitleLowerCase = item.title.toLowerCase();
        return filter === 'All'
          ? itemTitleLowerCase.includes(searchValueLowerCase)
          : itemTitleLowerCase.includes(searchValueLowerCase) && item.country === filter;
      });
    }
  );

  const filteredProducts = useSelector(filteredProductsSelector);
  const productsLoadingStatus = useSelector(state => state.productsReducer.productsLoadingStatus);

  const content =
    productsLoadingStatus === 'loading' ? (
      <Preloader />
    ) : productsLoadingStatus === 'error' ? (
      'ERROR'
    ) : (
      filteredProducts.map(item => <Card key={item.id} {...item} />)
    );

  return <div className={styles.products__wrapper}>{content}</div>;
};

export default ProductList;
