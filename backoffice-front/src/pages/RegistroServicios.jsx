import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ButtonAppBar from '../components/Navbar';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
     { field: 'nombreServicio', headerName: 'Nombre', width: 120 },
    { field: 'precio', headerName: 'Precio', width: 120 },
    { field: 'descripcion', headerName: 'Descripcion', width: 300 },
    
  ];
  
  export default function RegistrosServicios() {
    const [rows, setRows] = React.useState([]);
  
    React.useEffect(() => {
      axios.get('http://localhost:3000/tipo-servicio')
        .then(response => {
          setRows(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    }, []);
  
    return (
      <>
        <ButtonAppBar />
        <Container maxWidth={"lg"}>
          <Typography
            marginTop={5}
            marginBottom={3}
            variant='h5'>
            Registros de Servicios
          </Typography>
          <div style={{ height: 500, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10, 25, 100]}
              disableRowSelectionOnClick
              disableSelectionOnClick
            />
          </div>
        </Container>
      </>
    );
  }