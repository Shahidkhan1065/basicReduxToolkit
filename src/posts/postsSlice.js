import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async ({ limit }) => {
    console.log(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    return data;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    lists: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.list = payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default postsSlice.reducer;
