import { configureStore } from '@reduxjs/toolkit';
import { wizardReducer } from './rootSlice';
import postsSlice from './posts/postsSlice';

export const store = configureStore({
  reducer: {
    wizardReducer: wizardReducer,
    posts: postsSlice,
  },
});
