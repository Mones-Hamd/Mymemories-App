import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PostProvider } from './context/PostsContect';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';
const App = () => {
  return (
    <GoogleOAuthProvider clientId="301554052314-0fc4d79gaom2mibrl375jv08qkia3sps.apps.googleusercontent.com">
      <BrowserRouter>
        <PostProvider>
          <Container maxwidth="lg">
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/auth" exact component={Auth} />
            </Switch>
          </Container>
        </PostProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
