import Box from '@mui/material/Box'
import React from 'react'
import SiderBar from '../../components/custom-slider'
import ListHotel from '../../section/dashboard/list-hotel/ListHotel'

export default function Home() {
  return (
    <div>
      <Box sx={{margin: "0 auto", width: "90%" , }}>
        <SiderBar/>
        <ListHotel/>
      </Box>
      
    </div>
  )
}
