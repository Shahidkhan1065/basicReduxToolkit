import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './postsSlice';

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts({ limit: 5 }));
  }, [dispatch]);

  return <div>posts...</div>;
};

export default Posts;
