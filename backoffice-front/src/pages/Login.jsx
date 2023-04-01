import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/Login.css'
import logo from '../images/Admin.png'
import car from '../images/car1.jpg'
import { Link } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear()}
      {' Clean Jazz'}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${car})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}
       
        />
        <Grid className='Login-background' sx={{bgcolor:'#92b1d5'}} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >

        
            <Link to={"/"} style={{ textDecoration: 'none' }}>
            <Avatar sx={{ m: 1, width: 210,height: 210}} src={logo}/>
            </Link> 
              
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1}}>
              <TextField style={{ borderColor: '#fff'}}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                autoFocus
                color="warning"

              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                color="warning"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recuérdame"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1,backgroundColor: '#2f74b3',
                '&:hover': {
                  backgroundColor: '#2b70bd',
                  
                },}}
              >
                Iniciar Sesión
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                  ¿Has olvidado la contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"¿No tienes una cuenta? Regístrate"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      

    </ThemeProvider>
  );
}