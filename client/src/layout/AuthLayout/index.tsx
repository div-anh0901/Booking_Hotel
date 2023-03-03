import Container from '@mui/material/Container'
import React from 'react'
import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <>
      <Container >
        <Outlet/>
      </Container>
    </>
  )
}
