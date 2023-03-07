import { lazy,ElementType,Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import SuspenseLoader from '../components/SuspenseLoader';
import AuthLayout from '../layout/AuthLayout';
import HomeLayout from '../layout/HomeLayout/HomeLayout';


const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader/>} >
      <Component {...props} />
    </Suspense>
  );


const LoginPage = Loadable(lazy(()=>import('../pages/auth/LoginPage')));
const RegisterPage = Loadable(lazy(()=>import('../pages/auth/RegisterPage')));
const ForgotPassword = Loadable(lazy(()=>import('../pages/auth/ForgotPassword')));
const HomePage = Loadable(lazy(()=>import('../pages/doashboard/Home')));


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
  },
  {
    path: "",
    element: <HomeLayout/>,
    children: [
      {
        path: "/home",
        element: <HomePage/>
      }
    ]
    
  }
];


export default router;




