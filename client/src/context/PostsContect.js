import React from 'react';
import { useState, createContext } from 'react';
const PostsContext = createContext();
export const PostProvider = (props) => {
  const [data, setData] = useState('');
  return (
    <PostsContext.Provider value="">{props.children}</PostsContext.Provider>
  );
};
