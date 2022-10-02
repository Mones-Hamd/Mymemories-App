import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './Styles';
import Input from './Input';

import { signIn, signUp } from '../../API/Auth';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const Auth = () => {
  const onSuccess = async (credentialResponse) => {
    const decodedToken = await jwtDecode(credentialResponse.credential);

    localStorage.setItem(
      'profile',
      JSON.stringify({
        result: decodedToken,
        token: credentialResponse.credential,
      }),
    );
    history.push('/');
  };
  const onError = () => {
    console.log('Login Failed');
  };
  const [formData, setFormData] = useState(initialFormData);
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      await signUp(formData);
      history.push('/');
    } else {
      await signIn(formData);
      history.push('/');
    }
    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Adress"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
              type={showPassword ? 'text' : 'password'}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin onSuccess={onSuccess} onError={onError} />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? 'Already have an account? Sign In'
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;

//"eyJhbGciOiJSUzI1NiIsImtpZCI6ImJhMDc5YjQyMDI2NDFlNTRhYmNlZDhmYjEzNTRjZTAzOTE5ZmIyOTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NjQ3MzI5ODgsImF1ZCI6IjMwMTU1NDA1MjMxNC0wZmM0ZDc5Z2FvbTJtaWJybDM3NWp2MDhxa2lhM3Nwcy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMTAxNTMyMzk0ODMxNzIwMDIyNiIsImVtYWlsIjoibW9uZXMubS5henphbTkxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIzMDE1NTQwNTIzMTQtMGZjNGQ3OWdhb20ybWlicmwzNzVqdjA4cWtpYTNzcHMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiTW9uZXMgQXp6YW0iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUxtNXd1M2dRalQ2bmhLcjRib2FGQ01SakM4cUlVamlSQkVldjU0bE9FU3I9czk2LWMiLCJnaXZlbl9uYW1lIjoiTW9uZXMiLCJmYW1pbHlfbmFtZSI6IkF6emFtIiwiaWF0IjoxNjY0NzMzMjg4LCJleHAiOjE2NjQ3MzY4ODgsImp0aSI6ImMwNTBlMTZlNjk4YmM4NTFmNGY0MjBhNmFmZWI3NDEzYWE1ZWM1YTYifQ.gU0fH3fGTdad4yjWfp4ZVOV_OwRknh51rsyX5N0A8xLra8rqIbgQFPGz8sI68UlqDrN_3IiJBLeqZj_hSAxNVs7BNH-_akCH1IK-cexwpNEEPp46XAbkw57sS_6K1YIRSw5A0xZ9yTj7d6bj9KaGwrOqGKy2Vh1453bLwoQ3Gd6kjstr1q5yTltOY3fnGyiqjMMJ_iERrQxR-qG92N4SaA6JmudiV2IzqjdtRTRu_c4xN20TagjEfwj7blln6GJpH2_L2p4eiYQ3uB4FiLliZt_8fh1wFyGq165ylkKf2r7hmBICZyso0uQf_sUbAv7NRWpI3t5vT6s9T2Y7YeEvAw"
