
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
import NuevoVehiculo from '../pages/NuevoVehiculo';
import NuevoServicio from '../pages/NuevoServicio';
import NuevoLavado from '../pages/NuevoLavado';
 
function Rutas() {
  return (
    <Router>
    <Routes> 
        <Route path="/login" element={ <Login/>}/>  
        <Route path="*" element={<Error/>}/>
        <Route path="/empleado/crear" element={<NuevoEmpleado/>}/>
        <Route path="/" element={<NuevoEmpleado/>}/>
        <Route path="/cliente/crear" element={<NuevoCliente/>}/>
        <Route path="/lavado/registros" element={<RegistrosLavados/>}/>
        <Route path="/cliente/editar" element={<EditarCliente/>}/>
        <Route path="/empleado/editar" element={<EditarEmpleado/>}/>
        <Route path="/vehiculo/crear" element={<NuevoVehiculo/>}/>
        <Route path="/servicio/crear" element={<NuevoServicio/>}/>
        <Route path="/lavado/crear" element={<NuevoLavado/>}/>
    </Routes>
</Router>
  );
}

export default Rutas;