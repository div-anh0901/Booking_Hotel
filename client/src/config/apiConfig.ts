import axios ,{AxiosRequestConfig}from 'axios';
import { CreateUserParams, LoginUserParams } from './typeConfig';

const API_URL = "http://localhost:3001/api";
const  axiosClient = axios.create({baseURL: API_URL});

const config: AxiosRequestConfig = { withCredentials: true };

export const postRegisterUser = async(data:CreateUserParams)=> axiosClient.post('/auth/register',data,config);
export const postLoginUser = async(data:LoginUserParams)=>axiosClient.post('/auth/login',data,config);



