import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { PositionRelative, PositonAbsolute } from '../position/Position';
import { Typography } from '@mui/material';

type Props ={
  name: string;
  type_hotel: string;
  price: string;
  images:string[]
}



const SwipeableTextMobileStepper:React.FC<Props> =(data)=> {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    
        <Box sx={{ maxWidth: 300, flexGrow: 1 , border: "1px solid #ccc", marginBottom :"20px" }}>
          <PositionRelative >
            <SwipeableViews
              loop={true}
              autoPlay={false}
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {data.images.map((step, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 200,
                        display: 'block',
                        maxWidth: 300,
                        overflow: 'hidden',
                        width: '100%',
                      }}
                      src={step}
                      alt=""
                    />
                  ) : null}
                </div>
              ))}
            </SwipeableViews>
            
            <MobileStepper
              steps={0}
              position="static"
              variant="dots"
              activeStep={activeStep}
              nextButton={
                  <PositonAbsolute top={0} right={0} >
                    <Button
                      size="small"
                      onClick={handleNext}
                      sx={{height: "200px", display:"flex", alignItems: "center"}}
                      disabled={activeStep === maxSteps - 1}
                    >
                      <Box 
                        sx={{height: "30px", width:"30px", borderRadius:"50%",backgroundColor:'white',color:"black",display:'flex', alignItems:"center",justifyContent:'center'}}
                      >
                        {theme.direction === 'rtl' ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Box>
                      
                    </Button>
                  </PositonAbsolute>
              }
              backButton={
                <PositonAbsolute top={0} left={0}  >
                  <Button 
                    size="small" 
                    onClick={handleBack} 
                    disabled={activeStep === 0}
                    sx={{height: "200px", display:"flex", alignItems: "center", color:"white"}}  
                  >
                    <Box 
                        sx={{height: "30px", width:"30px", borderRadius:"50%",backgroundColor:'white',color:"black",display:'flex', alignItems:"center",justifyContent:'center'}}
                      >
                        {theme.direction === 'rtl' ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                    </Box>
                </Button>
                </PositonAbsolute>
              }
            />
            </PositionRelative>
          <Typography variant='subtitle1' sx={{padding: "5px"}} >
              {data.type_hotel}
          </Typography>
          <Typography variant='h5'  sx={{padding: "5px", width: "200px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}} >
            {data.name}
          </Typography>
          <Typography variant='subtitle1'sx={{padding: "5px"}} >
              {data.price}
          </Typography>
        </Box>
    
  );
}

export default SwipeableTextMobileStepper;