import React, { useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';

const Home = () => {
  const [currentId, setCurrentID] = useState(null);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item={true} xs={12} sm={7}>
            <Posts setCurrentID={setCurrentID} currentId={currentId} />
          </Grid>
          <Grid item={true} xs={12} sm={4}>
            <Form setCurrentID={setCurrentID} currentId={currentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
