import React from 'react'
import { Outlet } from 'react-router'
import Banner from '../../section/dashboard/banner/Banner'
import Header from '../../section/dashboard/header/Header'

export default function HomeLayout() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Outlet/>
    </div>
  )
}
