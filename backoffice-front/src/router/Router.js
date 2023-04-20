
import React from 'react';
import { BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";
 import Login from "../pages/Login"
 import Error from '../pages/Error'
 import NuevoEmpleado from '../pages/NuevoEmpleado'
import NuevoCliente from '../pages/NuevoCliente';
import RegistrosLavados from '../pages/RegistrosLavado';
import EditarCliente from '../pages/EditarCliente';
import EditarEmpleado from '../pages/EditarEmpleado';
 
function Rutas() {
  return (
    <Router>
    <Routes> 
        <Route path="/login" element={ <Login/>}/>  
        <Route path="*" element={<Error/>}/>
        <Route path="/crear/empleado" element={<NuevoEmpleado/>}/>
        <Route path="/" element={<NuevoEmpleado/>}/>
        <Route path="/crear/cliente" element={<NuevoCliente/>}/>
        <Route path="/registros/lavados" element={<RegistrosLavados/>}/>
        <Route path="/editar/cliente" element={<EditarCliente/>}/>
        <Route path="/editar/empleado" element={<EditarEmpleado/>}/>
    </Routes>
</Router>
  );
}

export default Rutas;