import React from 'react'
import {  
    Grid,
    Typography,
    Stack,
    Switch,
    FormControlLabel,
    Link,
    Button
  } from '@mui/material';
import authBackGround from '../../assets/auth-background.jpg';
import FormProvider from '../../components/hook-form/FormProvider';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RHFTextField } from '../../components/hook-form';
import { postRegisterUser } from '../../config/apiConfig';
type FormValuesProps = {
  email: string;
  username: string;
  password: string;
  cfpassword: string;
  afterSubmit?: string;
};
export default function RegisterPage() {
  const navigate = useNavigate();
  
  const defaultValues = {
    email: '',
    username: '',
    password: '',
    cfpassword:''
  };


  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().required('Email is required').email(),
    password: Yup.string().required('Password is required').min(6).max(15),
    cfpassword: Yup.string().oneOf([Yup.ref('password')],"Password  must match")
  });

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });


  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;
  async function onSubmit(data:  FormValuesProps){  
        try{
          await postRegisterUser({username: data.username,email: data.email, password: data.password});
          navigate('/login');
        } catch(ex){
          console.log(ex);
        }    
  }

  return (
    <FormProvider methods={methods}  onSubmit={handleSubmit(onSubmit)} >
      <Grid container  justifyContent="center" alignItems="center" spacing={2}  >
        <Grid item xs={4} alignItems="center"  >
          <Stack>
            <Typography style={{marginBottom: "10px"}} variant='h4'>Welcome Back</Typography>
            <Typography style={{marginBottom: "10px"}} variant='h6'>Please log into your account</Typography>

            <RHFTextField style={{marginBottom: "20px"}} name='username' id='username' label="Username" />
            <RHFTextField style={{marginBottom: "20px"}} name='email' id='email' label="Email Address" />
            <RHFTextField style={{marginBottom: "20px"}} type="password" name='password' id='password' label="Password" />
            <RHFTextField style={{marginBottom: "20px"}} type="password"  name='cfpassword' id='cfpassword' label="Confirm Password" />

            <Stack  direction="row" alignItems="center" justifyContent="space-between"  >
                <FormControlLabel control={<Switch defaultChecked />} label="Remember" />
                <Link href="/forgotPassword" color="#2B89F9">
                    Forgot Password?
                </Link>
            </Stack>
            
            <Button type='submit' variant="contained"  style={{marginTop:  "20px"}}>Login</Button>
          </Stack>
          <Typography style={{marginTop: "10px"}} variant='subtitle2' textAlign="center" >-------------Or-------------</Typography> 
          <Button  fullWidth style={{marginTop:  "10px", backgroundColor:  "#F54D33", color: 'white'}}>Google+</Button>
          <Typography style={{marginTop: "10px"}} variant='subtitle2'>Account Aleady?  
            <Link href="/login" color="#2B89F9" style={{marginLeft: "5px"}}>
              Login
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <img src={authBackGround}  style={{width: "100%" ,  height: "100vh"}} alt="auth background"  />
        </Grid>
      </Grid>
    </FormProvider> 
      
    
  )
}
