import React, { useState } from 'react';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { visuallyHiddenInput } from '../components/styles/StyledComponents'; // Ensure this import path is correct
import { usernameValidator } from '../utils/validators';
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp';

const Login = () => {

  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin(prev => !prev);

  const Name = useInputValidation("");
  const Bio = useInputValidation("");
  const password = useInputValidation("");
  const username = useInputValidation("", usernameValidator)
  const avatar = useFileHandler("single")

  const handleLogin = (e)=>{
      e.preventDefault()
  }

  const handleSignUp = (e) =>{
    e.preventDefault();
  }

  return (
    <div 
    style={{
      backgroundImage:"linear-gradient(rgb(44, 80 ,68 ,46%), rgb(112, 80, 9 ,18%))",
    
    }}
    >
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
                Sign Up instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign UP</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleSignUp}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                >
                  <CameraAltIcon />
                  <visuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                </IconButton>
              </Stack>

              {avatar.error &&(
                <Typography 
                  m={"1rem auto"}
                  width={"fit-content"}
                  display={"block"}
                  color={"error"}
                  variannt={"caption"}
                >
                  {avatar.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={Name.value}
                onChange={Name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={Bio.value}
                onChange={Bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign UP
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
  );
}

export default Login;
