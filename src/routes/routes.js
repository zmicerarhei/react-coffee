import { lazy, createRef } from 'react';

const MainPage = lazy(() => import('../pages/MainPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const ProductPage = lazy(() => import('../pages/ProductPage'));
const BeansPage = lazy(() => import('../pages/BeansPage'));

const routes = [
  { path: '/', element: <MainPage />, nodeRef: createRef() },
  { path: '/products', element: <ProductsPage />, nodeRef: createRef() },
  { path: '/products/:id', element: <ProductPage />, nodeRef: createRef() },
  { path: '/gallery', element: <BeansPage />, nodeRef: createRef() },
];

export { routes };
