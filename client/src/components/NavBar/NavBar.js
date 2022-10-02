import React, { useEffect, useState } from 'react';
import memories from '../../imgs/memories.jpeg';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useStyles from './Styles';
import decode from 'jwt-decode';
const NavBar = () => {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    localStorage.clear();
    history.push('/auth');
    setUser(null);
  };

  useEffect(() => {
    (async () => {
      const token = await user?.token;
      if (token) {
        const decodedToken = await decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
      setUser(JSON.parse(localStorage.getItem('profile')));
    })();
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          MY Memories{' '}
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.picture}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
