
import React from 'react';
import { BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";
 import Login from "../pages/Login"
 import Error from '../pages/Error'

 
function Rutas() {
  return (
    <Router>
    <Routes> 
        <Route path="/" element={ <Login/>}/>  
        <Route path="*" element={<Error/>}/>

        
    </Routes>
</Router>
  );
}

export default Rutas;