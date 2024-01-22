import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducers';
import orderReducer from './reducers/orderSlice';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  orders: orderReducer,
});

export default store;