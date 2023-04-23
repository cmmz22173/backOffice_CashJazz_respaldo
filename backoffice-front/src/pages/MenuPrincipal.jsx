import React from "react";
import ButtonAppBar from "../components/Navbar";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { isTokenValid } from "../services/Guard";
export default function Menu(){
    console.log()
    return(
        <>
            <ButtonAppBar/>
            {isTokenValid()}
        </>
    )
}