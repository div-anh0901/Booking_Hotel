import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
export const LinkCustom =styled(Link)(({ theme }) => ({
    fontFamily:'sans-serif',
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer'
}));