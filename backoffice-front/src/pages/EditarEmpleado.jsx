import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonAppBar from '../components/Navbar';
import { Button, Container, Grid, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function EditarEmpleado() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [genero, setGenero] = React.useState('female');

  const handleChangeGenero = (event) => {
    setGenero(event.target.value);
  }

  const [estado, setEstado] = React.useState('activo');

  const handleChangeEstado = (event) => {
    setEstado(event.target.value);
  }

  const [checked, setChecked] = React.useState(false);

  const handleChangeSwitch = (event) => {
    setChecked(event.target.checked);
  };

  const [puesto, setPuesto] = React.useState();

  const handleChangePuesto = (event) => {
    setPuesto(event.target.value);
  };

  
  return (
      <>
    <ButtonAppBar/>
     <Container sx={{mt:"3rem",mb:"3rem"}} maxWidth="md">
       
       <TextField
       sx={{mr:"1rem"}}
       variant="outlined"
       size="small"
       type="number"
       
       /> 

       <Button color="secondary" variant="contained"><SearchIcon/></Button>
     </Container>  

      <Container maxWidth="md">
          <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
                      <Tab label="Informacion Personal" {...a11yProps(0)} />
                      <Tab label="Laboral" {...a11yProps(1)} />
                     
                  </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                    Informacion del empleado
                    </Grid>
                    <Grid item xs={6} textAlign={"end"}>
                    Editar    
                    <Switch
                    checked={checked}
                    onChange={handleChangeSwitch}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                    </Grid>
                </Grid>
                
                  <Grid container component={"form"} spacing={2}>
                 
                  <Grid item xs={3}>
                        <TextField
                            disabled={!checked?true:false}
                            required
                            id="primerNombre"
                            label="Primer Nombre"
                          
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            disabled={!checked?true:false}
                            required
                            id="primerNombre"
                            label="Segundo Nombre"
                          
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            disabled={!checked?true:false}
                            required
                            id="primerNombre"
                            label="Primer Apellido"
                            
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            disabled={!checked?true:false}
                            required
                            id="primerNombre"
                            label="Segundo Apellido"
                    
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            disabled={!checked?true:false}
                            required
                            id="dni"
                            label="Identidad"
                            type={"number"}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={3} >
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Genero</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={genero}
                                onChange={handleChangeGenero}
                                row
                            >
                                <FormControlLabel disabled={!checked?true:false} value="female" control={<Radio />} label="Female" />
                                <FormControlLabel disabled={!checked?true:false} value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={3} >
                    <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Activo</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={estado}
                                onChange={handleChangeEstado}
                                row
                            >
                                <FormControlLabel disabled={!checked?true:false} value="activo" control={<Radio />} label="Si" />
                                <FormControlLabel disabled={!checked?true:false} value="inactivo" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    

                   

                    <Grid item xs={3}>
                        <TextField
                        disabled={!checked?true:false}
                        type={"email"}
                        label="Correo"
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                        disabled={!checked?true:false}
                        type={"number"}
                        label="Telefono"
                        />
                    </Grid>
                   
                    <Grid item xs={6} sx={{mt:"0.8rem"}} textAlign={"end"}>
                        <Button disabled={!checked?true:false} variant="contained"  color="error" size="large" sx={{mr:"1rem"}}>Cancelar</Button>
                        <Button disabled={!checked?true:false} variant="contained" size="large">Guardar</Button>
                    </Grid>

                  </Grid>
                  
              </TabPanel>
				  <TabPanel value={value} index={1}>
					  <Grid container spacing={2}>
						  <Grid item xs={6} textAlign={"start"}>
							  Editar puesto de trabajo

						  </Grid>
						  <Grid item xs={6} textAlign={"end"}>
							  Editar
							  <Switch
								  checked={checked}
								  onChange={handleChangeSwitch}
								  inputProps={{ 'aria-label': 'controlled' }}
							  />
						  </Grid>
						  <Grid item xs={12}>

							  <FormControl>
								  <FormLabel id="demo-controlled-radio-buttons-group">Puesto</FormLabel>
								  <RadioGroup
									  aria-labelledby="demo-controlled-radio-buttons-group"
									  name="controlled-radio-buttons-group"
									  value={puesto}
									  onChange={handleChangePuesto}
									  row
								  >
									  <FormControlLabel disabled={!checked ? true : false} value="Administrador" control={<Radio />} label="Administrador" />
									  <FormControlLabel disabled={!checked ? true : false} value="Lavador" control={<Radio />} label="Lavador" />
									  <FormControlLabel disabled={!checked ? true : false} value="Guardia" control={<Radio />} label="Guardia" />
								  </RadioGroup>
							  </FormControl>
						  </Grid>
						  <Grid item xs={12} hidden={(puesto==="Administrador")?false:true}>
							<Grid id="administrativo" container spacing={2}>
								<Grid item xs={4} textAlign={"center"}>
									<TextField
									label="User"
									disabled={!checked ? true : false}
									/>
									
								</Grid>
								<Grid item xs={4} textAlign={"center"}>
									
									<TextField
									label="Password"
									type={"password"}
									fullWidth
									disabled={!checked ? true : false}
									/>
								</Grid>

								<Grid item xs={4} textAlign={"center"}>
									<TextField
									label="confirm password"
									type={"password"}
									fullWidth
									disabled={!checked ? true : false}
									/>
								</Grid>

								<Grid item xs={12} textAlign={"end"}>
									<Button variant="contained"
									disabled={!checked ? true : false}
									>Guardar</Button>
								</Grid>

							</Grid>
						  </Grid>
						  <Grid id="Lavador" item xs={12} hidden={(puesto==="Lavador")?false:true}>
						  <Grid  container spacing={2}>
								
								<Grid item xs={6} textAlign={""}>
									
									<TextField
									label="hora inicio"
									type={"time"}
									fullWidth
									disabled={!checked ? true : false}
									/>
								</Grid>

								<Grid item xs={6} textAlign={""}>
									<TextField
									label="hora final"
									type={"time"}
									fullWidth
									disabled={!checked ? true : false}
									/>
								</Grid>

								<Grid item xs={12} textAlign={"end"}>
									<Button variant="contained"
									disabled={!checked ? true : false}>Guardar</Button>
								</Grid>

							</Grid>
						  </Grid>
						  <Grid item xs={12}>

						  </Grid>
					  </Grid>
				  </TabPanel>
          </Box>
        </Container>
      </>
  );
}