import { lazy,ElementType,Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import SuspenseLoader from '../components/SuspenseLoader';
import AuthLayout from '../layout/AuthLayout';
import ForgotPassword from '../pages/auth/ForgotPassword';


const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader/>} >
      <Component {...props} />
    </Suspense>
  );


const LoginPage = Loadable(lazy(()=>import('../pages/auth/LoginPage')));
const RegisterPage = Loadable(lazy(()=>import('../pages/auth/RegisterPage')));

const router:RouteObject[] = [
  {
    path:"",
    element: <AuthLayout/>,
    children:[
      {
        path: "/login",
        element:<LoginPage/>
      },
      {
        path: "/register",
        element:<RegisterPage/>
      },
      {
        path: "/forgotPassword",
        element:<ForgotPassword/>
      },
    ]
  }
];


export default router;




