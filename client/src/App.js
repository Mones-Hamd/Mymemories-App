import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './imgs/memories.jpeg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './Styles';
import { PostProvider } from './context/PostsContect';
const App = () => {
  const classes = useStyles();
  return (
    <PostProvider>
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            MY Memories{' '}
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </PostProvider>
  );
};

export default App;
