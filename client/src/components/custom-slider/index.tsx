
import {Typography,Box} from '@mui/material';
import { width } from '@mui/system';
import React, { useEffect, useMemo, useState } from 'react'
import { imageDataBanner } from '../../data/ImageData';
import { PositionRelative,PositonAbsolute } from '../position/Position';
import  SliderContainer  from './SliderContainer';

const SliderProps = {
    zoomFactor: 30, // How much the image should zoom on hover in percent
    slideMargin: 10, // Margin on each side of slides
    maxVisibleSlides: 5,
    pageTransition: 500 // Transition when flipping pages
  };
  

export default function SiderBar() {


  return (
    <>
    <Box sx={{ width: "100%" }}>
        <Typography variant='h4' sx={{margin : "30px 0px", fontFamily:'sans-serif'}} >
          Explore Destinations
        </Typography>
        <SliderContainer {...SliderProps}>
            {imageDataBanner.map((data,index) => (
              <PositionRelative key={index} className="">
                <img src={ data.image } alt='character' />
                <PositonAbsolute className='' top={0} sx={{width:  "100%",height: "100%"}}>
                  <Box sx={{backgroundColor: 'rgb(0, 0, 0, 0.5)', width:  "100%", height: "100%", color: "white" , display: "flex", alignItems:"center", justifyContent:"center",borderRadius:"10px"}}>
                      <Typography variant='h5'>{data.lable}</Typography>
                  </Box>
                    
                </PositonAbsolute>
              </PositionRelative>
          ))}
        </SliderContainer>

    </Box>
    </>
  )
}
