import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice.js';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;