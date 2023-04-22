import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TemporaryDrawer from '../components/Sidebar';
import ProfileMenuButton from './ProfileMenuButton';
import { Link } from "react-router-dom";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
            <TemporaryDrawer/>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{textDecoration: 'none'}}>
             <Button sx={{color:"white", fontSize:16}} >BACKOFFICE</Button>
            </Link>
          </Typography>
          
          <ProfileMenuButton/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}