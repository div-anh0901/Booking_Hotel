import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import  Grid  from '@mui/material/Grid';


export const Menu = styled(Grid)(({ theme }) => ({
    height: "60px",
    width: "80%",
    margin: "0 auto"
}));
export const MenuContainer = styled(Grid)(({ theme }) => ({
    backgroundColor:  "white",
}));