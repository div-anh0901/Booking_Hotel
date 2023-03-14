
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
        <SliderContainer {...SliderProps}>
            {imageDataBanner.map((data,index) => (
              <PositionRelative key={index} className="">
                <img src={ data.image } alt='character' />
                <PositonAbsolute className='' top={0} >
                  <Box sx={{backgroundColor: 'rgb(0, 0, 0, 0.7)', width:  "100%", color: "white"}}>
                      <Typography variant='h5'>{data.lable}</Typography>
                  </Box>
                    
                </PositonAbsolute>
              </PositionRelative>
          ))}
        </SliderContainer>

    </>
  )
}
