import React from "react";
import ButtonAppBar from "../components/Navbar";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";

export default function NuevoServicio(){
    return(
        <>
            <ButtonAppBar/>
            <Container maxWidth="sm" sx={{mt:"3rem"}}>
                <Typography>Creacion de servicio</Typography>
                <Grid marginTop={3} container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                        label="Nombre"
                        id="nombre"
                        fullWidth
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                        label="Precio"
                        id="precio"
                        type="number"
                        fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Descripcion"
                            id="descripcion"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} textAlign={"center"}>
                        <Button variant="contained" type="submit">Guardar</Button>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}