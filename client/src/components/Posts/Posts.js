import React, { useContext } from 'react';
import Post from './Post/Post';
import useStyles from './Styles';
import { Grid, CircularProgress } from '@material-ui/core';
import { PostsContext } from '../../context/PostsContect';
const Posts = () => {
  const posts = useContext(PostsContext);
  console.log(posts);
  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignitem="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
