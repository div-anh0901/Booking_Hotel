

import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import bannner from '../../../assets/banner/banner1.jpg';
import { PositionRelative, PositonAbsolute } from '../../../components/position/Position';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker  } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
function Banner() {
    const [valueStartDate,setValueStartDate] = useState<Dayjs| null>(null);
    const [valueEndDate,setValueEndDate] = useState<Dayjs| null>(null);
    return (
      <PositionRelative >
        <Grid>
          <img src={bannner}  style={{width: "100%" ,  height: "100vh"}} alt="auth background"  />
        </Grid>
        <PositonAbsolute bottom={50}  width="100%" >
            <Grid style={{backgroundColor: 'white',color:  'black' ,width: "80%" ,margin: '0 auto',fontFamily: 'sans-serif', padding: "10px", borderRadius: "5px  "}}>
                <Typography variant='h4' sx={{
                   fontSize:{ xs:"1.6rem" ,sm:"1.7rem" ,md:  "2.15rem", },
                   marginBottom:{xs: "5px", sm:"7px", md:"10px"}
                }}>
                    Latest reviews. Lowest prices.
                </Typography>
                <Typography
                  sx={{
                    fontSize:{ xs:"0.8rem" ,sm:"0.8rem" ,md:  "1rem", },
                    marginBottom:{xs: "5px", sm:"7px", md:"10px"}
                 }}
                style={{marginBottom: "10px"}} variant='subtitle1'>Compares prices from 200+ booking sites to help you find the lowest price on the right hotel for you.</Typography>
              <Grid container style={{padding: "5px"}} spacing={2}>
                  <Grid item xs={12} md={3}>
                      <TextField
                          fullWidth
                          id="outlined-start-adornment"
                          placeholder="Ha noi hotel"
                          InputProps={{
                            startAdornment: <InputAdornment position="start"><LocationOnSharpIcon/> </InputAdornment>,
                          }}
                        />
                  </Grid>
                  <Grid item xs={6} md={3} >
                    <DemoItem>
                      <DatePicker  label="Start Date"  value={valueStartDate} onChange={(newValue)=>setValueStartDate(newValue)}  />
                    </DemoItem>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <DemoItem>
                        <DatePicker  label="End Date" value={valueEndDate} onChange={(newValue)=>setValueEndDate(newValue)} />
                    </DemoItem>
                  </Grid>
                  <Grid item  xs={12} md={3}>
                    <Button variant="contained" style={{height:"100%"}} fullWidth>Search</Button>
                  </Grid>
                   
              </Grid>

            </Grid>
        </PositonAbsolute>
      </PositionRelative>
    );
}

export default Banner