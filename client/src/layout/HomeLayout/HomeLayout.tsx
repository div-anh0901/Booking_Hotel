import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../components/header/Header'

export default function HomeLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
