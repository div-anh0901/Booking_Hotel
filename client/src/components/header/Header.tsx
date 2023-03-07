import { Grid, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { Item } from '../Item/Item'

export default function Header() {
  return (
    <Grid container style={{height: "60px" , width: "80%", margin: "0 auto"}}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" style={{width: "100%"}} >
            <Stack>Logo</Stack>
            <Stack direction="row">
                <Item>Hotels</Item>
                <Item>Listing</Item>
                <Item>Agent</Item>
                <Item>Pricing</Item>
                <Item> 
                    <Link href="/register" color="#2B89F9" style={{marginLeft: "5px"}}>
                        Sign In
                    </Link> 
                    /
                    <Link href="/register" color="#2B89F9" style={{marginLeft: "5px"}}>
                        Sign Up
                    </Link> 
                    </Item>
            </Stack>
        </Stack>
        
    </Grid>
  )
}
