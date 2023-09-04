import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';

const Store = configureStore({
  reducer: {
    chatStore: chatReducer,
  },
});

export default Store;
