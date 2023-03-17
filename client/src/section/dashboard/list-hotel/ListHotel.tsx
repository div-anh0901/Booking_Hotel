import { Typography } from '@mui/material'
import {Box} from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'
import SwipeableTextMobileStepper from '../../../components/custom-slider_v1'
import { listHotelData } from '../../../data/data'

export default function ListHotel() {
  return (
    <>
        <Typography variant='h4' sx={{margin: "20px 0" }}> List Hotel</Typography>
        <Grid container  spacing={2}>
          {
            listHotelData.map((data,index)=>(
              <Grid xs={6} sm={4} md={3} lg={3} item>
                  <SwipeableTextMobileStepper name={data.name} type_hotel={data.type_hotel}  price={data.price} images={data.images}/>
              </Grid>
            ))
          }
        </Grid>
    </>
  )
}
