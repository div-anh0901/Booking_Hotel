

import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import bannner from '../../../assets/banner/banner1.jpg';

function Banner() {

  
    return (
      <Grid >
        <Grid>
          <img src={bannner}  style={{width: "100%" ,  height: "100vh"}} alt="auth background"  />
        </Grid>
          
      </Grid>
    );
}

export default Banner