import React, { useEffect } from 'react';
import { useState, createContext } from 'react';
export const PostsContext = createContext();
export const PostProvider = (props) => {
  const [data, setData] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [data]);

  return (
    <PostsContext.Provider value={data}>{props.children}</PostsContext.Provider>
  );
};
