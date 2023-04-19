import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import BugReportIcon from '@mui/icons-material/BugReport';
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import StoreIcon from '@mui/icons-material/Store';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EventIcon from '@mui/icons-material/Event';
import BallotIcon from '@mui/icons-material/Ballot';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';


export default function ListSidebar(){

    const [openEmpleados, setOpenEmpleados] = React.useState(false);

    const handleClickEmpleados = () => {
      setOpenEmpleados(!openEmpleados);
    };

    const [openServicios, setOpenServicios] = React.useState(false);

    const handleClickServicios = () => {
      setOpenServicios(!openServicios);
    };

    const [openClientes, setOpenClientes] = React.useState(false);

    const handleClickClientes = () => {
      setOpenClientes(!openClientes);
    };

    const [openCitas, setOpenCitas] = React.useState(false);

    const handleClickCitas = () => {
      setOpenCitas(!openCitas);
    };



    return(
        <>
        <List>
                <ListItemButton onClick={handleClickEmpleados}>
                    <ListItemIcon>
                        <SupervisedUserCircleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Empleados" />
                    {openEmpleados ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openEmpleados} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Link to={"/crear/empleado"} style={{ textDecoration: 'none' }}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <PersonAddAlt1Icon />
                                </ListItemIcon>
                                <ListItemText primary="Nuevo" sx={{color:"black"}}/>
                            </ListItemButton>
                        </Link>
                        <Link to={"/editar/empleado"} style={{ textDecoration: 'none' }}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <ManageAccountsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Editar" sx={{color:"black"}}/>
                            </ListItemButton>
                        </Link>
                    </List>
                </Collapse>
                <ListItemButton onClick={handleClickServicios}>
                    <ListItemIcon>
                        <StoreIcon />
                    </ListItemIcon>
                    <ListItemText primary="Servicios" />
                    {openServicios ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openServicios} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Link to={"/crear/servicio"} style={{ textDecoration: 'none' }}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <AddBusinessIcon />
                                </ListItemIcon>
                                <ListItemText primary="Nuevo" sx={{color:"black"}}/>
                            </ListItemButton>
                        </Link>
                        <Link to={"/editar/servicio"} style={{ textDecoration: 'none' }}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <DriveFileRenameOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="Editar" sx={{color:"black"}}/>
                            </ListItemButton>
                        </Link>
                    </List>
                </Collapse>
                <ListItemButton onClick={handleClickClientes}>
                    <ListItemIcon>
                        <PeopleAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Clientes" />
                    {openClientes ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openClientes} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Link to={"/crear/cliente"} style={{ textDecoration: 'none' }}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <PersonAddAlt1Icon  />
                                </ListItemIcon>
                                <ListItemText primary="Nuevo" sx={{color:"black"}}/>
                            </ListItemButton>
                        </Link>
                        <Link to={"/buscar/cliente"} style={{ textDecoration: 'none' }}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <PersonSearchIcon  />
                                </ListItemIcon>
                                <ListItemText primary="Buscar" sx={{color:"black"}}/>
                            </ListItemButton>
                        </Link>
                    </List>
                </Collapse>
                <ListItemButton onClick={handleClickCitas}>
                    <ListItemIcon>
                        <EventNoteIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Lavados" />
                    {openCitas ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openCitas} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <Link to={"/registros/lavados"} style={{ textDecoration: 'none' }}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <BallotIcon  />
                                </ListItemIcon>
                                <ListItemText primary="Registros" sx={{color:"black"}}/>
                            </ListItemButton>
                        </Link>
                        <Link to={"/crear/lavado"} style={{ textDecoration: 'none' }}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <EventIcon  />
                                </ListItemIcon>
                                <ListItemText primary="Crear" sx={{color:"black"}}/>
                            </ListItemButton>
                        </Link>
                      
                    </List>
                </Collapse>

           
            <ListItemButton>
                <ListItemIcon>
                    <NotificationsIcon />
                </ListItemIcon>
                <ListItemText primary="Notificaciones" />
            </ListItemButton>
        </List>
        <Divider />
        <List>
            <ListSubheader component="div" inset>

            </ListSubheader>
            <ListItemButton>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Configuraciones" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    < BugReportIcon />
                </ListItemIcon>
                <ListItemText primary="Reportar" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
            </ListItemButton>
        </List>
        </>
    );
}


export const mainListItems = (

    
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Empleado" />
        </ListItemButton>
       <Link to={"/servicios"} style={{ textDecoration: 'none' }}>
            <ListItemButton>
                <ListItemIcon>
                    <CleaningServicesIcon />
                </ListItemIcon>
                <ListItemText primary="Servicios" sx={{ color: "black" }} />
            </ListItemButton>
        </Link>
        <ListItemButton>
            <ListItemIcon>
                <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Notificaciones" />
        </ListItemButton>
        
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>

        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Configuraciones" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                < BugReportIcon />
            </ListItemIcon>
            <ListItemText primary="Reportar" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
        </ListItemButton>
    </React.Fragment>
);