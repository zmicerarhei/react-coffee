import { MainPage, ProductsPage, ProductPage, BeansPage } from '../../pages';
import Layout from '../Layout/Layout';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHttp } from '../../hooks/http.hook';
import { fetchProducts } from '../../slices/productsSlice';

import './App.css';

const App = () => {
  const { request } = useHttp();
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsSlice.products);
  // const [goods, setGoods] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts(request));
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage products={products} />} />
          <Route path="/products" element={<ProductsPage products={products} />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/beans" element={<BeansPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
