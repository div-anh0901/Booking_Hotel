
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import  Box  from '@mui/material/Box';
import  Grid  from '@mui/material/Grid';

type Attribute =  {
    zIndex?: number;
    top?: number| 0;
    right?: number|0;
    bottom?: number|0;
    left?: number|0;
    width?: string;
    height?: string;
}


export const PositionRelative = styled(Grid)<Attribute>((
    { zIndex,top,right,bottom,left,theme ,
        width, height
    }) => ({
   zIndex,
   width,
   height,
   position: "relative"
}));

export const PositonAbsolute = styled(Grid)<Attribute>((
    {top,right,bottom,left,theme 
    }) => ({
        position: "absolute",
        top,
        right,
        left,
        bottom
    })
);