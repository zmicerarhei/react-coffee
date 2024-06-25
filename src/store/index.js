import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../slices/productsSlice';

// Создание собственного middlware, для преобразования логики функции dispatch, что бы она
// могла принимать в себя строки

const stringMiddleware = () => next => action => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }
  return next(action);
};

//Подключение и настройка store Redux Toolkit
//Redux Toolkit по умолчанию использует middlware для строк и функций в качестве action

const store = configureStore({
  reducer: { productsSlice },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
