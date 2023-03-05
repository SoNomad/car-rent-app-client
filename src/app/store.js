import { configureStore } from '@reduxjs/toolkit';
import { bookingReducer } from './slices/bookingSlice';

const store = configureStore({
  reducer: bookingReducer,
});

export default store;
